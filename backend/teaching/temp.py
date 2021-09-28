from .models import Subject, SchoolType, SchoolSubType, SchoolLevel, SubjectGroup
import os
import csv


def init_subjects():
    """
    Zdroj: https://docs.google.com/spreadsheets/d/1msJu1AX_-wYLbhvz8rqsZxFMBwX7-xzghCAFHeeBQEI/edit#gid=2044127896
    List: Číselník předmětů
    """

    subjects_list = []
    filepath = os.path.join(os.getcwd(), "data_init", "subjects.csv")
    with open(filepath, "r", encoding="utf8") as data:
        subjects = csv.DictReader(data)
        for subject in subjects:
            subjects_list.append(subject)

    for subject in subjects_list:
        c, created = Subject.objects.get_or_create(code=subject["Zkratka"], defaults={"name": subject["Název"]})


def init_school_level_2021_02():
    """
    Zdroj https://miro.com/app/board/o9J_lby_RpM=/?moveToWidget=3074457353595062463&cot=14
    a v nem listecek s referenci na https://www.msmt.cz/file/54480/
    21.9.2021 - Stupně škol - Upraveno podle úkolu v Jira ZU-267
    """
    data = """
        Mateřská škola
        1. stupeň ZŠ
        2. stupeň ZŠ / nižší stupně gymnázií
        SŠ / SOŠ / SOU / vyšší stupně gymnázií
        2. stupeň ZŠ a SŠ
    """

    def _get_qs_from_subjects_names(subjects_names: list) -> []:
        qs = []
        for subject_name in subjects_names:
            subject, _ = Subject.objects.get_or_create(name=subject_name)
            qs.append(subject)
        return qs

    first_level_elementary_school_subjects = [
        "Čeština",
        "Angličtina",
        "Němčina",
        "Francouzština",
        "Španělština",
        "Ruština",
        "Matematika",
        "Informační a komunikační technologie",
        "Výtvarná výchova",
        "Hudební výchova",
        "Výchova ke zdraví",
        "Tělesná výchova",
        "Člověk a svět práce",
        "Výchova demokratického občana",
        "Výchova k myšlení v evropských a globálních souvislostech",
        "Multikulturní výchova",
        "Environmentální výchova",
        "Mediální výchova",
    ]
    first_level_elementary_school_subjects_qs = _get_qs_from_subjects_names(first_level_elementary_school_subjects)

    second_level_elementary_school_subjects = [
        "Čeština",
        "Angličtina",
        "Němčina",
        "Francouzština",
        "Španělština",
        "Ruština",
        "Matematika",
        "Informační a komunikační technologie",
        "Dějepis",
        "Občanská výchova",
        "Fyzika",
        "Chemie",
        "Přírodopis / Biologie",
        "Zeměpis",
        "Hudební výchova",
        "Výtvarná výchova",
        "Výchova ke zdraví",
        "Tělesná výchova",
        "Člověk a svět práce",
        "Dramatická výchova",
        "Etická výchova",
        "Filmová / audiovizuální výchova",
        "Taneční a pohybová výchova",
        "Osobnostní a sociální výchova",
        "Výchova demokratického občana",
        "Výchova k myšlení v evropských a globálních souvislostech",
        "Multikulturní výchova",
        "Environmentální výchova",
        "Mediální výchova",
        "Konverzace",
    ]
    second_level_elementary_school_subjects_qs = _get_qs_from_subjects_names(second_level_elementary_school_subjects)

    high_school_subjects = [
        "Čeština",
        "Angličtina",
        "Němčina",
        "Francouzština",
        "Španělština",
        "Ruština",
        "Matematika",
        "Informační a komunikační technologie",
        "Dějepis",
        "Fyzika",
        "Chemie",
        "Přírodopis / Biologie",
        "Zeměpis",
        "Hudební výchova",
        "Výtvarná výchova",
        "Tělesná výchova",
        "Dramatická výchova",
        "Etická výchova",
        "Filmová / audiovizuální výchova",
        "Taneční a pohybová výchova",
        "Výchova demokratického občana",
        "Výchova k myšlení v evropských a globálních souvislostech",
        "Multikulturní výchova",
        "Environmentální výchova",
        "Mediální výchova",
        "Odborné předměty",
        "Praktické vyučování",
        "Odborný výcvik",
        "Základy společenských věd",
        "Konverzace",
    ]
    high_school_subjects_qs = _get_qs_from_subjects_names(high_school_subjects)

    for name in [i.strip() for i in data.strip().split("\n")]:
        school_level, _ = SchoolLevel.objects.get_or_create(name=name)
        if name == "1. stupeň ZŠ":
            school_level.subjects.add(*first_level_elementary_school_subjects_qs)
        elif name == "2. stupeň ZŠ / nižší stupně gymnázií":
            school_level.subjects.add(*second_level_elementary_school_subjects_qs)
        elif name == "SŠ / SOŠ / SOU / vyšší stupně gymnázií":
            school_level.subjects.add(*high_school_subjects_qs)
        elif name == "Mateřská škola":
            school_level.target_school_level = False
            school_level.save()
        elif name == "2. stupeň ZŠ a SŠ":
            school_level.target_school_level = False
            school_level.save()


def init_school_type_2021_02():
    """
    Zdroj https://miro.com/app/board/o9J_lby_RpM=/?moveToWidget=3074457353595062463&cot=14
    a v nem uvedene listecky s referenci na:
    * https://www.atlasskolstvi.cz/stredni-skoly
    * https://www.zakonyprolidi.cz/cs/2005-13#cast1
    """
    types = """
        ZŠ
        ZŠ speciální
        SŠ
        Konzervatoř
        ZUŠ - základní umělecká škola
    """
    subtypes = """
        gymnázium
        střední odborná škola
        střední odborné učiliště
        střední průmyslová škola
        střední zemědělská škola
        střední zahradnická škola
        střední vinařská škola
        střední lesnická škola
        střední rybářská škola
        střední zdravotnická škola
        hotelová škola
        střední pedagogická škola
        střední umělecká škola
        střední uměleckoprůmyslová škola
        obchodní akademie
        odborná škola
        odborné učiliště
        praktická škola
    """
    for name in [i.strip() for i in types.strip().split("\n")]:
        SchoolType.objects.get_or_create(name=name)

    ss_type = SchoolType.objects.get(name="SŠ")
    for name in [i.strip() for i in subtypes.strip().split("\n")]:
        SchoolSubType.objects.get_or_create(name=name, type=ss_type)


def init_subject_group():
    """
    Init for subject group
    Data source: https://docs.google.com/spreadsheets/d/1msJu1AX_-wYLbhvz8rqsZxFMBwX7-xzghCAFHeeBQEI/edit#gid=443235263
    List Skupiny předmětů
    First row removed
    """

    subject_group_list = []
    filepath = os.path.join(os.getcwd(), "data_init", "subject_groups.csv")
    with open(filepath, "r", encoding="utf8") as data:
        subject_groups = csv.DictReader(data)
        for subject_group in subject_groups:
            subject_group_list.append(subject_group)

    for subject_group in subject_group_list:
        c, created = SubjectGroup.objects.get_or_create(name=subject_group["Skupina předmětů"])
        subject = Subject.objects.get(code=subject_group["Předmět"])
        subject.subject_group = c
        subject.save()
