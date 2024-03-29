import os
import csv
from .models import College, Faculty, Course
from teaching.models import SchoolLevel, Subject
from qualifications.models import Title, EducationSpecialization, QualificationType, OtherExperience
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


def init_courses():
    """
    Zdroj: https://docs.google.com/spreadsheets/d/1_karAzypSkiUOgrp6cm0_PLCimXyzdunxuUbdZKqjvI/edit#gid=0
    list Čistopis MVP
    The second row was removed.
    The first one was edited to:
    Typ kvalifikace,Titul,1. stupeň ZŠ,2. stupeň ZŠ,SŠ,Specializace,Typ ostatní kvalifikace,Název,Vysoká škola,Fakulta,Cena,Město,SDS / semestr,P,DF,K,jednoobor,dvouobor,Odkaz na více info,Poznámka,ČJL,AJ,NJ,FJ,ŠJ,RJ,M,IKT,D,OV ,ZSV,F,CH,PŘ,Z,HV,VV,VKZ,TV,ČSP,DV,ETV,FAV,TPV,OSV,VDO,EGS,MKV,ENV,MV,ODBP,PV,ODBV,NOVÁ AKREDITACE DO 2021
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
        "D",
        "OV",
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
        "ZSV",
    ]

    for course in courses:
        qualification_type = QualificationType.objects.get(name=course["Typ kvalifikace"])
        title = False
        if qualification_type.name == "Titul":
            title = Title.objects.filter(code=course["Titul"]).first()

        specialization = False
        if course["Specializace"] != "0" and course["Specializace"] != "":
            specialization = EducationSpecialization.objects.get(name=course["Specializace"].capitalize().strip())

        other_qualification_type = False
        if qualification_type.name == "Ostatní kvalifikace" and course["Typ ostatní kvalifikace"] != "0":
            other_qualification_type = OtherExperience.objects.get(name=course["Typ ostatní kvalifikace"])

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

        study_form = []
        if "P" in course["P"]:
            study_form.append(Course.FORM_PRESENT)
        if "K" in course["K"]:
            study_form.append(Course.FORM_COMBINED)
        if "D" in course["DF"]:
            study_form.append(Course.FORM_DISTANT)

        major = []
        if course["dvouobor"] == "1":
            major.append(Course.MAJOR_DOUBLE)

        if course["jednoobor"] == "1":
            major.append(Course.MAJOR_SINGLE)

        url = course["Odkaz na více info"]
        note = course["Poznámka"]

        c, created = Course.objects.get_or_create(
            name=name,
            url=url,
            defaults={
                "qualification_type": qualification_type,
                "university": university,
                "city": city,
                "price": price,
                "study_length_in_semesters": study_length_in_semesters,
                "study_form": study_form,
                "major": major,
                "note": note,
            },
        )

        if other_qualification_type:
            c.other_qualification_type = other_qualification_type
            c.save()

        if title:
            c.title = title
            c.save()

        if faculty:
            c.faculty = faculty
            c.save()

        if specialization:
            c.education_specialization = specialization
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
            if level != "0":
                if level == "1. stupeň ZŠ":
                    level_db = SchoolLevel.objects.get(name="1. stupeň ZŠ")
                elif level == "2. stupeň ZŠ":
                    level_db = SchoolLevel.objects.get(name="2. stupeň ZŠ / nižší stupně gymnázií")
                elif level == "SŠ":
                    level_db = SchoolLevel.objects.get(name="SŠ / SOŠ / SOU / vyšší stupně gymnázií")
                levels.append(level_db.id)

        if course["2. stupeň ZŠ"] != "0" and course["SŠ"] != "0":
            levels.append(SchoolLevel.objects.get(name="2. stupeň ZŠ a SŠ").id)

        c.school_levels.add(*levels)
        subjects = []
        for code in subject_codes:
            course_subj_code = course.get(code)
            if course_subj_code:
                if course_subj_code == code:
                    subjects.append(Subject.objects.get(code=code).id)

        c.subjects.add(*subjects)
