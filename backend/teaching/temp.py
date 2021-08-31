from .models import Subject, SchoolType, SchoolSubType, SchoolLevel, SubjectGroup
import os


def init_subjects_2021_01():
    """
    Zdroj: https://docs.google.com/spreadsheets/d/1msJu1AX_-wYLbhvz8rqsZxFMBwX7-xzghCAFHeeBQEI/edit#gid=2008534637
    Nejasnost s dvojim vyznamem "CJ": Cizí jazyk=CJ, Další cizí jazyk=CJ
    """
    SUBJECTS = """
        Český jazyk a literatura	ČJL
        Cizí jazyk	CJ
        Matematika a její aplikace	M
        Informační a komunikační technologie	IKT
        Člověk a jeho svět (pouze 1. stupeň ZŠ)	ČAS
        Dějepis	D
        Výchova k občanství	OV / ZSV
        Fyzika	F
        Chemie	CH
        Přírodopis	PŘ
        Zeměpis (Geografie)	Z
        Hudební výchova	HV
        Výtvarná výchova	VV
        Výchova ke zdraví	VKZ
        Tělesná výchova	TV
        Člověk a svět práce	ČSP
        Dramatická výchova	DV
        Etická výchova	ETV
        Filmová / audiovizuální výchova	FAV
        Taneční a pohybová výchova	TPV
        Osobnostní a sociální výchova	OSV
        Výchova demokratického občana	VDO
        Výchova k myšlení v evropských a globálních souvislostech	EGS
        Multikulturní výchova	MKV
        Environmentální výchova	ENV
        Mediální výchova	MV
        Odborné předměty	ODBP
        Praktické vyučování	PV
        Odborný výcvik	ODBV
    """

    for name, code in [i.strip().split("\t") for i in SUBJECTS.strip().split("\n")]:
        Subject.objects.get_or_create(name=name.strip(), code=code.strip())


def init_school_level_2021_02():
    """
    Zdroj https://miro.com/app/board/o9J_lby_RpM=/?moveToWidget=3074457353595062463&cot=14
    a v nem listecek s referenci na https://www.msmt.cz/file/54480/
    """
    data = """
        Mateřská škola - MŠ
        Základní škola - ZŠ
        Základní škola - 1. stupeň
        Základní škola - 2. stupeň (+ odpovídající stupeň víceletých gymnázií, 6ti a 8mi letá)
        Střední škola - SŠ
        Střední škola - víceletá gymnázia, jejichž třídy odpovídají střednímu vzdělávání
        Konzervatoře
    """

    def _get_qs_from_subjects_names(subjects_names: list) -> []:
        qs = []
        for subject_name in subjects_names:
            subject, _ = Subject.objects.get_or_create(name=subject_name)
            qs.append(subject)
        return qs

    first_level_elementary_school_subjects = [
        "Český jazyk a literatura",
        "Cizí jazyk",
        "Matematika a její aplikace",
        "Informační a komunikační technologie",
        "Člověk a jeho svět (pouze 1. stupeň ZŠ)",
        "Hudební výchova",
        "Výtvarná výchova",
        "Tělesná výchova",
        "Člověk a svět práce",
        "Dramatická výchova",
        "Etická výchova",
        "Filmová / audiovizuální výchova",
        "Taneční a pohybová výchova",
        "Výchova demokratického občana",
        "Výchova k myšlení v evropských a globálních souvislostech",
        "Multikulturní výchova",
        "Environmentální výchova",
        "Mediální výchova",
    ]
    first_level_elementary_school_subjects_qs = _get_qs_from_subjects_names(first_level_elementary_school_subjects)

    second_level_elementary_school_subjects = [
        "Český jazyk a literatura",
        "Cizí jazyk",
        "Další cizí jazyk",
        "Matematika a její aplikace",
        "Informační a komunikační technologie",
        "Dějepis",
        "Výchova k občanství",
        "Fyzika",
        "Chemie",
        "Přírodopis",
        "Zeměpis (Geografie)",
        "Hudební výchova",
        "Výtvarná výchova",
        "Tělesná výchova",
        "Člověk a svět práce",
        "Dramatická výchova",
        "Etická výchova",
        "Filmová / audiovizuální výchova",
        "Taneční a pohybová výchova",
        "Osobnostní a sociální výchova",
        "Výchova k myšlení v evropských a globálních souvislostech",
        "Multikulturní výchova",
        "Environmentální výchova",
        "Mediální výchova",
    ]
    second_level_elementary_school_subjects_qs = _get_qs_from_subjects_names(second_level_elementary_school_subjects)

    high_school_subjects = [
        "Český jazyk a literatura",
        "Cizí jazyk",
        "Další cizí jazyk",
        "Matematika a její aplikace",
        "Informační a komunikační technologie",
        "Dějepis",
        "Výchova k občanství",
        "Fyzika",
        "Chemie",
        "Přírodopis",
        "Zeměpis (Geografie)",
        "Hudební výchova",
        "Výtvarná výchova",
        "Výchova ke zdraví",
        "Výchova demokratického občana",
        "Výchova demokratického občana",
        "Výchova k myšlení v evropských a globálních souvislostech",
        "Multikulturní výchova",
        "Environmentální výchova",
        "Mediální výchova",
        "Odborné předměty",
        "Praktické vyučování",
        "Odborný výcvik",
    ]
    high_school_subjects_qs = _get_qs_from_subjects_names(high_school_subjects)

    conservatory = [
        "Dramatická výchova",
        "Etická výchova",
        "Filmová / audiovizuální výchova",
        "Taneční a pohybová výchova",
    ]

    conservatory_qs = _get_qs_from_subjects_names(conservatory)

    for name in [i.strip() for i in data.strip().split("\n")]:
        school_level, _ = SchoolLevel.objects.get_or_create(name=name)
        if name == "Základní škola - 1. stupeň":
            school_level.subjects.add(*first_level_elementary_school_subjects_qs)
        elif name == "Základní škola - 2. stupeň (+ odpovídající stupeň víceletých gymnázií, 6ti a 8mi letá)":
            school_level.subjects.add(*second_level_elementary_school_subjects_qs)
        elif name == "Střední škola - SŠ":
            school_level.subjects.add(*high_school_subjects_qs)
        elif name == "Konzervatoře":
            school_level.subjects.add(*conservatory_qs)


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

    SubjectGroup.objects.get_or_create(name="jakýkoli")
    SubjectGroup.objects.get_or_create(name="jakýkoli kromě cizího jazyka")

    filepath = os.path.join(os.getcwd(), "data_init", "subject_groups.csv")
    with open(filepath, "r", encoding="utf-8") as csvfile:
        data = csvfile.read().strip()

        dict = {}
        for group_name, subject in [i.split(",") for i in data.split("\n")]:
            if group_name in dict:
                subj, _ = Subject.objects.get_or_create(code=subject)
                dict[group_name].append(subj)
            else:
                subj, _ = Subject.objects.get_or_create(code=subject)
                dict[group_name] = [subj]

        for key in dict:
            subj_group, _ = SubjectGroup.objects.get_or_create(name=key)
            subj_group.subjects.add(*dict[key])
