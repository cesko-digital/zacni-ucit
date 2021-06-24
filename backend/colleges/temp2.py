import os
import csv
from .models import College, Faculty, Course
from teaching.models import SchoolLevel, Subject
from qualifications.models import Title


def get_courses_from_csv(filepath):
    courses_list = []
    with open(filepath, "r", encoding="utf8") as data:
        courses = csv.DictReader(data)
        for course in courses:
            course["Cena"] = course["Cena"].replace("\xa0", "").replace(" Kč", "")
            courses_list.append(course)
    return courses_list


def init_courses():
    """
    Zdroj: https://docs.google.com/spreadsheets/d/1_karAzypSkiUOgrp6cm0_PLCimXyzdunxuUbdZKqjvI/edit#gid=0
    list Čistopis MVP
    The second row was removed.
    The first one was edited to:
    Typ kvalifikace,Titul,1. stupeň ZŠ,2. stupeň ZŠ,SŠ,Typ ostatní kvalifikace,Název,Vysoká škola,Fakulta,Cena,Město,SDS / semestr,P,D,K,jednoobor,dvouobor,Odkaz na více info,Poznámka,ČJL,AJ,NJ,FJ,ŠJ,RJ,M,IKT,ČAS,D,OV / ZSV,F,CH,PŘ,Z,HV,VV,VKZ,TV,ČSP,DV,ETV,FAV,TPV,OSV,VDO,EGS,MKV,ENV,MV,ODBP,PV,ODBV,NOVÁ AKREDITACE DO 2021
    """
    filepath = os.getcwd() + "\\colleges\\courses_MVP.csv"
    courses = get_courses_from_csv(filepath)

    subject_codes = [
            "ČJL", "AJ", "NJ", "FJ", "ŠJ", "RJ", "M", "IKT", "ČAS", "D",
            "OV / ZSV", "F", "CH", "PŘ", "Z", "HV", "VV", "VKZ", "TV",
            "ČSP", "DV", "ETV", "FAV", "TPV", "OSV", "VDO", "EGS", "MKV",
            "ENV", "MV", "ODBP", "PV", "ODBV"]
    for course in courses:
        qualification_type = course["Typ kvalifikace"]
        title = ""
        if qualification_type == "Titul":
            title = Title.objects.filter(code=course["Titul"])
        other_qualification_type = ""
        if qualification_type == "Ostatní kvalifikace":
            other_qualification_type = course["Typ ostatní kvalifikace"]
        name = course["Název"]
        university = College.objects.filter(name=course["Vysoká škola"])
        faculty = Faculty.objects.filter(name=course["Fakulta"], college__in=university)
        city = course["Město"]
        try:
            price = int(course["Cena"])
        except(ValueError):
            price = 0
        try:
            study_length_in_semesters = int(course["SDS / semestr"])
        except(ValueError):
            breakpoint()
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
            qualification_type=qualification_type,
            title=title,
            other_qualification_type=other_qualification_type,
            name=name,
            university=university,
            faculty=faculty,
            city=city,
            price=price,
            study_length_in_semesters=study_length_in_semesters,
            form_present=form_present,
            form_combined=form_combined,
            form_distant=form_distant,
            double_major=double_major,
            single_major=single_major,
            url=url,
            note=note
        )

        if not created:
            c.subjects.clear()
            c.school_levels.clear()

        school_levels = []
        school_levels.append(course["1. stupeň ZŠ"])
        school_levels.append(course["2. stupeň ZŠ"])
        school_levels.append(course["SŠ"])
        levels = []
        for level in school_levels:
            level = level.replace(" ZŠ", "")
            if level != "0":
                levels.append(SchoolLevel.objects.filter(name__contains=level))
        c.school_levels.add(*levels)
        subjects = []
        for code in subject_codes:
            if course[code] != "0" and course[code] != "":
                subjects.append(Subject.objects.filter(code=code))
        c.subjects.add(*subjects)
