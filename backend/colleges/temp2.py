import os
import csv
from .models import College, Faculty, Course
from teaching.models import SchoolLevel, Subject
from qualifications.models import Title
from django.core.exceptions import ObjectDoesNotExist
from decimal import Decimal


def get_courses_from_csv(filepath):
    courses_list = []
    with open(filepath, "r", encoding="utf8") as data:
        courses = csv.DictReader(data)
        for course in courses:
            course["Cena"] = course["Cena"].replace("\xa0", "").replace(" Kč", "")
            courses_list.append(course)
    return courses_list


def add_missing_language_school():
    c, created = College.objects.get_or_create(
        name="Jazyková škola - EVROPSKÉ VZDĚLÁVACÍ CENTRUM",
        defaults={
            "type": "jazykova skola",
            "address": "Pospíšilova 324 500 03 Hradec Králové",
            "ic": "24249904",
            "url": "https://www.evcentrum.cz/",
        },
    )


def add_missing_institute_of_lifelong_learning():
    college = College.objects.get(name="Mendelova univerzita v Brně")
    c, created = Faculty.objects.get_or_create(
        name="Institut celoživotního vzdělávání", defaults={"college": college, "url": "https://icv.mendelu.cz/"}
    )


def add_missing_subjects():
    subjects = ["Angličtina", "Němčina", "Francouzština", "Španělština", "Ruština"]
    codes = ["AJ", "NJ", "FJ", "ŠJ", "RJ"]
    for i in range(len(subjects)):
        Subject.objects.get_or_create(code=codes[i], defaults={"name": subjects[i]})


def init_courses():
    """
    Zdroj: https://docs.google.com/spreadsheets/d/1_karAzypSkiUOgrp6cm0_PLCimXyzdunxuUbdZKqjvI/edit#gid=0
    list Čistopis MVP
    The second row was removed.
    The first one was edited to:
    Typ kvalifikace,Titul,1. stupeň ZŠ,2. stupeň ZŠ,SŠ,Typ ostatní kvalifikace,Název,Vysoká škola,Fakulta,Cena,Město,SDS / semestr,P,D,K,jednoobor,dvouobor,Odkaz na více info,Poznámka,ČJL,AJ,NJ,FJ,ŠJ,RJ,M,IKT,ČAS,D,OV / ZSV,F,CH,PŘ,Z,HV,VV,VKZ,TV,ČSP,DV,ETV,FAV,TPV,OSV,VDO,EGS,MKV,ENV,MV,ODBP,PV,ODBV,NOVÁ AKREDITACE DO 2021
    """
    filepath = os.path.join(os.getcwd(), "colleges", "courses_MVP.csv")
    courses = get_courses_from_csv(filepath)

    subject_codes = [
        "ČJL",
        "AJ",
        "NJ",
        "FJ",
        "ŠJ",
        "RJ",
        "M",
        "IKT",
        "ČAS",
        "D",
        "OV / ZSV",
        "F",
        "CH",
        "PŘ",
        "Z",
        "HV",
        "VV",
        "VKZ",
        "TV",
        "ČSP",
        "DV",
        "ETV",
        "FAV",
        "TPV",
        "OSV",
        "VDO",
        "EGS",
        "MKV",
        "ENV",
        "MV",
        "ODBP",
        "PV",
        "ODBV",
    ]

    for course in courses:
        qualification_type = course["Typ kvalifikace"]
        title = False
        if qualification_type == "Titul":
            title = Title.objects.filter(code=course["Titul"]).first()
        other_qualification_type = ""
        if qualification_type == "Ostatní kvalifikace":
            other_qualification_type = course["Typ ostatní kvalifikace"]
        name = course["Název"]

        university = College.objects.filter(name=course["Vysoká škola"].strip()).first()
        if not university:
            print("Can not import %s" % name)
            continue

        try:
            faculty = Faculty.objects.get(name=course["Fakulta"], college=university.id)
        except ObjectDoesNotExist:
            faculty = False
        city = course["Město"]
        try:
            price = Decimal(float(course["Cena"]))
        except (ValueError):
            price = 0
        try:
            study_length_in_semesters = int(course["SDS / semestr"])
        except (ValueError):
            study_length_in_semesters = 0
        form_present = "P" in course["P"]
        form_combined = "K" in course["K"]
        form_distant = "D" in course["D"]
        double_major = False
        if course["dvouobor"] == "1":
            double_major = True
        single_major = True

        if course["jednoobor"] == "0":
            single_major = False
        url = course["Odkaz na více info"]
        note = course["Poznámka"]

        c, created = Course.objects.get_or_create(
            name=name,
            url=url,
            defaults={
                "qualification_type": qualification_type,
                "other_qualification_type": other_qualification_type,
                "university": university,
                "city": city,
                "price": price,
                "study_length_in_semesters": study_length_in_semesters,
                "form_present": form_present,
                "form_combined": form_combined,
                "form_distant": form_distant,
                "double_major": double_major,
                "single_major": single_major,
                "note": note,
            },
        )

        if title:
            c.title = title
            c.save()

        if faculty:
            c.faculty = faculty
            c.save()

        if not created:
            c.subjects.clear()
            c.school_levels.clear()

        school_levels = [
            course["1. stupeň ZŠ"],
            course["2. stupeň ZŠ"],
            course["SŠ"],
        ]
        levels = []
        for level in school_levels:
            level = level.replace(" ZŠ", "")
            if level != "0":
                levels_db = SchoolLevel.objects.filter(name__contains=level)
                if len(levels_db) > 1:
                    levels.append(levels_db[1].id)
                else:
                    levels.append(levels_db[0].id)
        c.school_levels.add(*levels)
        subjects = []
        for code in subject_codes:
            if course[code] == code:
                subjects.append(Subject.objects.get(code=code).id)
        c.subjects.add(*subjects)
