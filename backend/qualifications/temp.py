from .models import (
    CollegeArea,
    CollegeProgramme,
    EducationType,
    Title,
    EducationArea,
    SubjectType,
    OtherExperience,
    Qualification
)
from teaching.models import Subject, SchoolLevel
import csv
import os

IGNORED_CHARS = "\t ,."


def init_map_2021_01():
    """
    Zdroj: https://docs.google.com/spreadsheets/d/1msJu1AX_-wYLbhvz8rqsZxFMBwX7-xzghCAFHeeBQEI/edit?usp=sharing
    """
    data = """
Architektura a urbanismus		M	D	F	VV
	Architektura a urbanismus,
	Územní plánování,
	Krajinářská architektura,
Bezpečnostní obory		OV / ZSV	VDO	EGS
	Požární ochrana a průmyslová bezpečnost,
	Ochrana obyvatelstva,
	Bezpečnost společnosti,
	Bezpečnostní management,
	Technologie pro obranu a bezpečnost,
	Bezpečnostně právní studia,
	Kriminalistika a forenzní disciplíny,
	Řízení a použití ozbrojených sil a bezpečnostních sborů,
	Policejní činnosti,
	Bezpečnostní aspekty ve veřejné správě,
Biologie, ekologie a životní prostředí		PŘ	CH	VKZ	ENV
	Biologie,
	Zoologie,
	Botanika,
	Fyziologie živočichů,
	Mikrobiologie,
	Experimentální biologie,
	Teoretická a evoluční biologie,
	Molekulární a buněčná biologie,
	Antropologie,
	Parazitologie,
	Hydrobiologie,
	Ekologie a ochrana prostředí,
	Inženýrská ekologie,
	Environmentální vědy.
Doprava		M	IKT	F
	Dopravní infrastruktura,
	Dopravní inženýrství a spoje,
	Technika a technologie v dopravě a spojích,
	Inteligentní dopravní systémy,
	Logistika a řízení dopravních procesů,
	Provoz a řízení letecké dopravy,
	Dopravní systémy a technika,
	Dopravní prostředky.
Ekonomické obory		M	OV / ZSV	ČSP	MV
	Ekonomické teorie,
	Ekonomika a management,
	Hospodářská politika a správa,
	Kvantitativní metody v ekonomice,
	Podniková ekonomika,
	Management,
	Marketing,
	Finance a účetnictví,
	Bankovnictví, peněžnictví a pojišťovnictví,
	Finance,
	Veřejné finance,
	Mezinárodní ekonomické vztahy,
	Cestovní ruch a turismus.
Elektrotechnika		F	IKT	M
	Elektrotechnika a informatika,
	Elektrotechnika, energetika a management,
	Komunikace, multimédia a elektronika,
	Elektrotechnika, elektronika, komunikační a řídicí technika,
	Projektování elektrických zařízení,
	Elektrotechnika,
	Aplikovaná elektrotechnika.
Energetika		M	F
	Energetika,
	Elektroenergetika
Farmacie		CH	PŘ	VKZ
	Farmacie
Filologie		ČJL	CJ	D	Z	MKV	MV
	Filologie,
	Překladatelství a tlumočnictví
Filozofie, religionistika a teologie		OV / ZSV	D	ETV	VDO	EGS
	Filozofie,
	Religionistika,
	Humanitní studia,
	Teologie.
Fyzika		M	F
	Fyzika
	Aplikovaná fyzika
Historické vědy		D
	Historické vědy,
	Archeologie,
	Etnologie.
Chemie		CH
	Anorganická chemie,
	Organická chemie,
	Analytická chemie,
	Fyzikální chemie,
	Makromolekulární chemie,
	Biochemie,
	Chemie,
	Jaderná chemie,
	Chemie a chemické technologie,
	Chemie a technická chemie,
	Chemie a technologie ochrany životního prostředí,
	Chemické a procesní inženýrství,
	Chemie a technologie materiálů,
	Chemie a technologie paliv a prostředí,
	Technologie vody,
Informatika		IKT	M
	Informatika,
	Teoretická informatika,
	Aplikovaná informatika,
	Informační technologie,
	Počítačové inženýrství,
	Výpočetní technika,
	Softwarové inženýrství,
	Informační systémy,
	Počítačová grafika,
	Počítačová lingvistika,
	Informační a komunikační technologie,
	Systémové inženýrství a informatika.
Kybernetika		IKT	M	F
	Umělá inteligence,
	Kybernetika a robotika,
	Automatické řízení,
	Interakce člověk – stroj,
	Technická kybernetika,
	Řídicí technika.
Lesnictví a dřevařství		PŘ	F	ENV
	Lesní inženýrství,
	Lesnictví,
	Dřevařské inženýrství,
	Dřevařství,
	Krajinné inženýrství,
	Krajinářství,
	Stavby na bázi dřeva,
	Nábytek,
	Arboristika,
	Nábytkové inženýrství.
Matematika		M
	Matematika,
	Aplikovaná matematika.
Mediální a komunikační studia		OV / ZSV	IKT	ČSP	MV
	Mediální studia,
	Komunikační studia,
	Žurnalistika,
	Kulturální studia,
	Marketingová komunikace a public relations.
Neučitelská pedagogika		OV / ZSV	VKZ	ČSP	OSV
	Pedagogika,
	Vychovatelství,
	Speciální pedagogika,
	Andragogika,
	Pedagogika volného času,
	Sociální pedagogika,
	Logopedie.
Politické vědy		OV / ZSV	ČSP	VDO	EGS
	Politologie,
	Mezinárodní teritoriální studia,
	Mezinárodní vztahy,
	Evropská studia,
	Bezpečnostní studia,
	Politická filozofie,
	Veřejná politika.
Potravinářství		CH	PŘ	VKZ
	Chemie a technologie potravin,
	Výživa a potraviny.
Právo		OV / ZSV	ČSP	VDO
	Teoretické právní vědy,
	Právo a právní věda.
Psychologie		OV / ZSV	VKZ	ČSP	OSV
	Psychologie
Sociální práce		OV / ZSV	VKZ	ČSP	EV	OSV	VDO	MKV
	Sociální politika a sociální práce,
	Sociální práce.
Sociologie		OV / ZSV	Z	VDO	EGS
	Sociologie,
	Genderová studia
Stavebnictví		M	F
	Stavební inženýrství,
	Pozemní stavby,
	Konstrukce a pozemní stavby,
	Vodní hospodářství a vodní stavby,
	Realizace staveb,
	Geodézie a kartografie.
Strojírenství, technologie a materiály		M	F
	Strojírenství,
	Strojírenská technologie,
	Strojní inženýrství,
	Technologická zařízení,
	Konstrukce strojů a zařízení
	Výrobní systémy,
	Konstrukce energetických strojů a zařízení,
	Konstrukce motorů a vozidel,
	Produktové inženýrství,
	Řízení jakosti,
	Management kvality,
	Biomechanika,
	Nanotechnologie,
	Mechatronika,
	Výrobní stroje, systémy a roboty,
	Automatizace výrobních procesů,
	Materiálové inženýrství,
	Textilní inženýrství,
	Sklářské inženýrství,
	Zpracovatelské inženýrství,
	Letecká a raketová technika,
	Řízení průmyslových systémů.
Tělesná výchova a sport; kinantropologie		TV	VKZ	TPV
	Tělesná výchova a sport,
	Kinantropologie.
Těžba a zpracování nerostných surovin		PŘ	F
	Hornictví,
	Důlní měřictví,
	Nerostné suroviny,
	Metalurgické inženýrství.
Učitelství
	Učitelství pro mateřské školy,
	Učitelství pro základní školy,
	Učitelství pro střední školy,
Umění		HV	VV	DV	FAV	TPV
	Hudební umění,
	Taneční umění,
	Dramatická umění,
	Filmové, rozhlasové, televizní a fotografické umění a nová média,
	Výtvarná umění,
	Design.
Vědy o umění a kultuře		HV	VV	DV	FAV	TPV
	Teorie a dějiny hudebního umění,
	Teorie a dějiny výtvarných umění,
	Teorie a dějiny divadla,
	Teorie a dějiny filmu a audiovizuální kultury,
	Estetika
Vědy o Zemi		PŘ	Z
	Geologie,
	Geografie,
	Kartografie a geoinformatika.
Veterinární lékařství, veterinární hygiena		PŘ	CH
	Veterinární lékařství,
	Veterinární hygiena a ekologie,
	Ochrana zvířat a welfare,
	Bezpečnost a kvalita potravin,
	Zdravotní nezávadnost a kvalita potravin v gastronomii.
Všeobecné lékařství a zubní lékařství		PŘ	CH	VKZ
	Všeobecné lékařství,
	Zubní lékařství.
Zdravotnické obory		PŘ	CH	VKZ
	Ošetřovatelství,
	Porodní asistence,
	Specializace ve zdravotnictví,
	Technické obory ve zdravotnictví.
Zemědělství		PŘ	F	ENV
	Zemědělské inženýrství,
	Fytotechnika,
	Rostinolékařství,
	Zootechnika,
	Tropické zemědělství,
	Ekologické zemědělství,
	Živočišná produkce,
	Zájmové chovy zvířat,
	Zoorehabilitace a asistenční aktivity se zvířaty,
	Rybářství, biotechnologie a šlechtění,
	Kvalita a zpracování zemědělských produktů,
	Agroekologie,
	Rozvoj venkova,
	Pozemkové úpravy,
	Zahradnické inženýrství.
"""
    lut = {}
    area, programme, subjects = None, None, None

    # parse text blob
    for line in data.strip().split("\n"):
        if line.startswith("\t"):
            programme = line.strip(IGNORED_CHARS)
        else:
            temp = line.strip(IGNORED_CHARS)
            temp = [i.strip(IGNORED_CHARS) for i in temp.split("\t") if i.strip(IGNORED_CHARS)]
            area = temp[0]
            subjects = temp[1:]
        if area not in lut:
            lut[area] = {"subjects": None, "programme": []}
        if subjects:
            lut[area]["subjects"] = subjects
            subjects = None
        if programme:
            lut[area]["programme"].append(programme)
            programme = None

    # create DB records from parsed text
    for area_name in lut:
        area, _ = CollegeArea.objects.get_or_create(name=area_name)
        if lut[area_name]["subjects"]:
            subjects = Subject.objects.filter(code__in=lut[area_name]["subjects"])
        else:
            subjects = []
        for programme in lut[area_name]["programme"]:
            programme, _ = CollegeProgramme.objects.get_or_create(name=programme, area=area)
            if subjects:
                programme.subjects.add(*subjects)

def init_subject_types():
    """
    Init for subject types
    """
    SUBJECT_TYPES = [
        "cizí jazyk",
        "všeobecně-vzdělávací předměty",
        "odborné předměty",
        "praktické vyučování",
        "odborný výcvik",
        "umělecké předměty",
        "konverzace",
        "tělesná výchova",
        "jakýkoli",
    ]

    for subject_type in SUBJECT_TYPES:
        SubjectType.objects.get_or_create(name=subject_type)


def init_qualification():
    """
    Zdroj dat: https://docs.google.com/spreadsheets/d/1mPvFm_5fgUjswlrOIkU2pnnTP4oIpy5b6GfxZFpt8iU/edit#gid=645564954
    csv file - removed first rows (headers)
    There are also initial data for Title, EducationArea and EducationType
    Adds missing SubjectType - Jakýkoli kromě cizího jazyka
    """

    filepath = os.path.join(os.getcwd(), "data_init", "tree.csv")
    csvfile = open(filepath, newline="", encoding="utf-8")
    data = csv.reader(csvfile, delimiter=",", quotechar='"')

    for row in data:
        (
            teaching_level,
            teaching_subject_type,
            _,
            type_1_title,
            type_1_level_1,
            type_1_level_2,
            type_1_subject_type,
            type_1_area,
            type_1_character,
            type_1_name,
            __,
            type_2_title,
            type_2_level,
            type_2_subject_type,
            type_2_area,
            type_2_character,
            type_2_name,
            ___,
            course_level,
            course_name,
            ____,
            experience_1_name,
            _____,
            experience_2_name,
            ______,
            legal_paragraph,
            note,
            example,
            row_id,
        ) = [item.strip() for item in row]

        if teaching_level and teaching_level != "None":
            teaching_level = teaching_level.replace(" ZŠ", "")
            teaching_level = SchoolLevel.objects.get(name__contains=teaching_level)
        else:
            teaching_level = None

        if teaching_subject_type and teaching_subject_type != "None":
            if teaching_subject_type == "Any":
                teaching_subject_type = SubjectType.objects.get(name="jakýkoli")
            else:
                teaching_subject_type = SubjectType.objects.get(name=teaching_subject_type)
        else:
            teaching_subject_type = None

        # init title
        if type_1_title and type_1_title != "None":
            type_1_title, _ = Title.objects.get_or_create(name=type_1_title, defaults={"code": type_1_title})
        else:
            type_1_title = None

        if type_2_title and type_2_title != "None":
            type_2_title, _ = Title.objects.get_or_create(name=type_2_title, defaults={"code": type_2_title})
        else:
            type_2_title = None

        # init educationArea
        if type_1_area and type_1_area != "None":
            if type_1_area == "Any":
                type_1_area, _ = EducationArea.objects.get_or_create(name="jakákoli")
            else:
                type_1_area, _ = EducationArea.objects.get_or_create(name=type_1_area)
        else:
            type_1_area = None

        if type_2_area and type_2_area != "None":
            if type_2_area == "Any":
                type_2_area, _ = EducationArea.objects.get_or_create(name="jakákoli")
            else:
                type_2_area, _ = EducationArea.objects.get_or_create(name=type_2_area)
        else:
            type_2_area = None

        # adds SubjectType jakýkoli kromě cizího jazyka
        if type_1_subject_type and type_1_subject_type != "None":
            if type_1_subject_type == "Any":
                type_1_subject_type, _ = SubjectType.objects.get_or_create(name="jakýkoli")
            elif type_1_subject_type == "Any kromě cizí jazyk":
                type_1_subject_type, _ = SubjectType.objects.get_or_create(name="jakýkoli kromě cizího jazyka")
            else:
                type_1_subject_type, _ = SubjectType.objects.get_or_create(name=type_1_subject_type)
        else:
            type_1_subject_type = None

        if type_2_subject_type and type_2_subject_type != "None":
            if type_2_subject_type == "Any":
                type_2_subject_type, _ = SubjectType.objects.get_or_create(name="jakýkoli")
            elif type_2_subject_type == "Any kromě cizí jazyk":
                type_2_subject_type, _ = SubjectType.objects.get_or_create(name="jakýkoli kromě cizího jazyka")
            else:
                type_2_subject_type, _ = SubjectType.objects.get_or_create(name=type_2_subject_type)
        else:
            type_2_subject_type = None

        # init EducationType
        if type_1_title:
            education_type_1, _ = EducationType.objects.get_or_create(
                qualification_type=EducationType.TITLE_QUALIFICATION,
                name=type_1_name,
                title=type_1_title,
                area=type_1_area,
                subject_type=type_1_subject_type,
                defaults={"character": type_1_character},
            )
        else:
            education_type_1 = None

        if type_2_title:
            education_type_2, _ = EducationType.objects.get_or_create(
                qualification_type=EducationType.TITLE_QUALIFICATION,
                name=type_2_name,
                title=type_2_title,
                area=type_2_area,
                subject_type=type_2_subject_type,
                defaults={"character": type_2_character},
            )
        else:
            education_type_2 = None

        if course_name and course_name != "None":
            education_type_course, _ = EducationType.objects.get_or_create(
                qualification_type=EducationType.CZV_QUALIFICATION,
                name=course_name,
            )
        else:
            education_type_course = None

        if experience_1_name and experience_1_name != "None":
            education_type_experience_1, _ = EducationType.objects.get_or_create(
                qualification_type=EducationType.OTHER_EXPERIENCE,
                name=experience_1_name,
            )
        else:
            education_type_experience_1 = None

        if experience_2_name and experience_2_name != "None":
            education_type_experience_2, _ = EducationType.objects.get_or_create(
                qualification_type=EducationType.OTHER_EXPERIENCE,
                name=experience_2_name,
            )
        else:
            education_type_experience_2 = None

        type_1_school_levels = []
        type_1_level_1 = type_1_level_1.replace(" ZŠ", "")
        type_1_level_2 = type_1_level_2.replace(" ZŠ", "")

        if type_1_level_1 and type_1_level_1 != "None":
            if type_1_level_1 == "Any":
                type_1_level_1, _ = SchoolLevel.objects.get_or_create(name="jakýkoli")
                type_1_school_levels.append(type_1_level_1)
            else:
                type_1_level_1, _ = SchoolLevel.objects.get_or_create(name__contains=type_1_level_1)
                type_1_school_levels.append(type_1_level_1)

        if type_1_level_2 and type_1_level_2 != "None":
            if type_1_level_2 == "Any":
                type_1_level_2, _ = SchoolLevel.objects.get_or_create(name="jakýkoli")
                type_1_school_levels.append(type_1_level_2)
            else:
                type_1_level_2, _ = SchoolLevel.objects.get_or_create(name__contains=type_1_level_2)
                type_1_school_levels.append(type_1_level_2)
            education_type_1.school_levels.add(*type_1_school_levels)

        type_2_school_levels = []
        type_2_level = type_2_level.replace(" ZŠ", "")

        if type_2_level and type_2_level != "None":
            if type_2_level == "Any":
                type_2_level, _ = SchoolLevel.objects.get_or_create(name="jakýkoli")
                type_2_school_levels.append(type_2_level)
            else:
                type_2_level, _ = SchoolLevel.objects.get_or_create(name__contains=type_2_level)
                type_2_school_levels.append(type_2_level)
            education_type_2.school_levels.add(*type_2_school_levels)

        type_course_school_levels = []
        course_level = course_level.replace(" ZŠ", "")

        if course_level and course_level != "None":
            if course_level == "Any":
                course_level, _ = SchoolLevel.objects.get_or_create(name="jakýkoli")
                type_course_school_levels.append(course_level)
            else:
                course_level, _ = SchoolLevel.objects.get_or_create(name__contains=course_level)
                type_course_school_levels.append(course_level)
                education_type_course.school_levels.add(*type_course_school_levels)

        if note == "None":
            note = None

        qualification, _ = Qualification.objects.get_or_create(
            row_id=row_id,
            defaults={
                "legal_paragraph": legal_paragraph,
                "example": example,
                "school_level": teaching_level,
                "subject_type": teaching_subject_type,
                "note": note,
            },
        )

        education = [
            x
            for x in [
                education_type_1,
                education_type_2,
                education_type_course,
                education_type_experience_1,
                education_type_experience_2,
            ]
            if x
        ]
        qualification.education_types.add(*education)

def init_other_options():
    data = """
		rodilý mluvčí
		doplňující studium k rozšíření odborné kvalifikace (DVPP)
		doplňující didaktické studium příslušného jazyka
		studium pedagogiky
		jazyková zkouška min. C1 SERR pro jazyky
		výkonný umělec
	"""

    for name in data.strip().split("\n"):
        OtherExperience.objects.get_or_create(name=name.strip())
