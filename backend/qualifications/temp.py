from .models import (
    CollegeArea,
    CollegeProgramme,
    EducationType,
    Title,
    EducationSpecialization,
    OtherExperience,
    Qualification,
    QualificationType,
)
from teaching.models import Subject, SchoolLevel, SubjectGroup
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


def init_education_specialization():
    filepath = os.path.join(os.getcwd(), "data_init", "education_specialization.csv")
    with open(filepath, "r", encoding="utf-8") as csvfile:
        data = csvfile.readlines()
        for i in range(len(data)):
            data[i] = data[i].replace("\n", "").replace('"', "").strip()
            education_specialization, _ = EducationSpecialization.objects.get_or_create(name=data[i])


def init_titles():
    titles = {
        "MAT": "Odborná maturita",
        "BC": "Bakalářské vzdělání",
        "MGR": "Magisterské vzdělání (Mgr. nebo Ing.)",
        "VL": "Výuční list",
        "DIS": "Vyšší odborné vzdělání",
    }

    for title in titles:
        if title == "BC" or title == "MGR":
            visible_in_form = True
        else:
            visible_in_form = False
        t, _ = Title.objects.get_or_create(code=title, name=titles[title], visible_in_form=visible_in_form)


def init_qualification():
    """
    Data source: https://docs.google.com/spreadsheets/d/1mPvFm_5fgUjswlrOIkU2pnnTP4oIpy5b6GfxZFpt8iU/edit#gid=645564954
    csv file - removed first rows (headers)
    There are also initial data for EducationSpecialization and EducationType
    Adds missing SubjectGroup - Jakýkoli kromě cizího jazyka
    """

    NoneType = type(None)
    filepath = os.path.join(os.getcwd(), "data_init", "tree_new.csv")
    csvfile = open(filepath, newline="", encoding="utf-8")
    data = csv.reader(csvfile, delimiter=",", quotechar='"')

    for row in data:
        (
            teaching_level,
            teaching_subject_group,
            _,
            type_1_title,
            type_1_level_1,
            type_1_subject_group,
            type_1_specialization,
            type_1_name,
            __,
            type_2_title,
            type_2_level,
            type_2_subject_group,
            type_2_specialization,
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
            teaching_level = SchoolLevel.objects.get(name=teaching_level)
        else:
            teaching_level = None

        if teaching_subject_group and teaching_subject_group != "None":
            if teaching_subject_group == "Any":
                teaching_subject_group = SubjectGroup.objects.all()
            else:
                teaching_subject_group = SubjectGroup.objects.get(name=teaching_subject_group)
        else:
            teaching_subject_group = None

        if type_1_title and type_1_title != "None":
            type_1_title, _ = Title.objects.get_or_create(
                name=type_1_title, defaults={"code": type_1_title, "visible_in_form": False}
            )
        else:
            type_1_title = None

        if type_2_title and type_2_title != "None":
            type_2_title, _ = Title.objects.get_or_create(
                name=type_2_title, defaults={"code": type_2_title, "visible_in_form": False}
            )
        else:
            type_2_title = None

        # init educationSpecialization
        if type_1_specialization and type_1_specialization != "None":
            if type_1_specialization == "Any":
                type_1_specialization = EducationSpecialization.objects.all()
            else:
                type_1_specialization, _ = EducationSpecialization.objects.get_or_create(name=type_1_specialization)
        else:
            type_1_specialization = None

        if type_2_specialization and type_2_specialization != "None":
            if type_2_specialization == "Any":
                type_2_specialization = EducationSpecialization.objects.all()
            else:
                type_2_specialization, _ = EducationSpecialization.objects.get_or_create(name=type_2_specialization)
        else:
            type_2_specialization = None

        # adds SubjectGroup jakýkoli kromě cizího jazyka
        if type_1_subject_group and type_1_subject_group != "None":
            if type_1_subject_group == "Any":
                type_1_subject_group = SubjectGroup.objects.all()
            elif type_1_subject_group == "Any kromě cizí jazyk":
                type_1_subject_group = SubjectGroup.objects.exclude(name="cizí jazyk")
            else:
                type_1_subject_group, _ = SubjectGroup.objects.get_or_create(name=type_1_subject_group)
        else:
            type_1_subject_group = None

        if type_2_subject_group and type_2_subject_group != "None":
            if type_2_subject_group == "Any":
                type_2_subject_group = SubjectGroup.objects.all()
            elif type_2_subject_group == "Any kromě cizí jazyk":
                type_2_subject_group = SubjectGroup.objects.exclude(name="cizí jazyk")
            else:
                type_2_subject_group, _ = SubjectGroup.objects.get_or_create(name=type_2_subject_group)
        else:
            type_2_subject_group = None

        # init EducationType
        if type_1_title:
            qualification_type1 = QualificationType.objects.get(name="Titul")
            education_type_1, _ = EducationType.objects.get_or_create(
                name=type_1_name,
                qualification_type=qualification_type1,
                title=type_1_title,
            )

            if type_1_title != "Odborná maturita" and type_1_name != "None":
                education_type_1.name = type_1_name
                education_type_1.save()

            if type(type_1_specialization) == EducationSpecialization:
                education_type_1.specializations.add(type_1_specialization)
            elif type(type_1_specialization) != NoneType:
                education_type_1.specializations.add(*type_1_specialization)

            if type(type_1_subject_group) == SubjectGroup:
                education_type_1.subject_groups.add(type_1_subject_group)
            elif type(type_1_subject_group) != NoneType:
                education_type_1.subject_groups.add(*type_1_subject_group)

        else:
            education_type_1 = None

        if type_2_title:
            qualification_type2 = QualificationType.objects.get(name="Titul")
            education_type_2, _ = EducationType.objects.get_or_create(
                qualification_type=qualification_type2,
                name=type_2_name,
                title=type_2_title,
            )

            if type(type_2_subject_group) == SubjectGroup:
                education_type_2.subject_groups.add(type_2_subject_group)
            elif type(type_2_subject_group) != NoneType:
                education_type_2.subject_groups.add(*type_2_subject_group)

            if type(type_2_subject_group) == SubjectGroup:
                education_type_2.subject_groups.add(type_2_subject_group)
            elif type(type_2_subject_group) != NoneType:
                education_type_2.subject_groups.add(*type_2_subject_group)

        else:
            education_type_2 = None

        if course_name and course_name != "None":
            qualification_type_course = QualificationType.objects.get(name="Kurz CŽV")
            education_type_course, _ = EducationType.objects.get_or_create(
                qualification_type=qualification_type_course,
                name=course_name,
            )
        else:
            education_type_course = None

        if experience_1_name and experience_1_name != "None":
            qualification_type_other1 = QualificationType.objects.get(name="Ostatní kvalifikace")
            education_type_experience_1, _ = EducationType.objects.get_or_create(
                qualification_type=qualification_type_other1,
                name=experience_1_name,
            )
        else:
            education_type_experience_1 = None

        if experience_2_name and experience_2_name != "None":
            qualification_type_other2 = QualificationType.objects.get(name="Ostatní kvalifikace")
            education_type_experience_2, _ = EducationType.objects.get_or_create(
                qualification_type=qualification_type_other2,
                name=experience_2_name,
            )
        else:
            education_type_experience_2 = None

        if type_1_level_1 and type_1_level_1 != "None":
            if type_1_level_1 == "Any":
                type_1_level_1 = SchoolLevel.objects.all()
            else:
                type_1_level_1, _ = SchoolLevel.objects.get_or_create(name=type_1_level_1)

            if type(type_1_level_1) == SchoolLevel:
                education_type_1.school_levels.add(type_1_level_1)
            else:
                education_type_1.school_levels.add(*type_1_level_1)

        if type_2_level and type_2_level != "None":
            if type_2_level == "Any":
                type_2_level = SchoolLevel.objects.all()
            else:
                type_2_level, _ = SchoolLevel.objects.get_or_create(name=type_2_level)

            if type(type_2_level) == SchoolLevel:
                education_type_2.school_levels.add(type_2_level)
            else:
                education_type_2.school_levels.add(*type_2_level)

        if course_level and course_level != "None":
            if course_level == "Any":
                course_level = SchoolLevel.objects.all()
            else:
                course_level, _ = SchoolLevel.objects.get_or_create(name=course_level)

            if type(course_level) == SchoolLevel:
                education_type_course.school_levels.add(course_level)
            else:
                education_type_course.school_levels.add(*course_level)

        if note == "None":
            note = None

        qualification, _ = Qualification.objects.get_or_create(
            row_id=row_id,
            defaults={
                "legal_paragraph": legal_paragraph,
                "example": example,
                "school_level": teaching_level,
                "note": note,
            },
        )

        if type(teaching_subject_group) == SubjectGroup:
            qualification.subject_groups.add(teaching_subject_group)
        else:
            qualification.subject_groups.add(*teaching_subject_group)

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
    """
    Init for OtherExperience
    """
    data = """
		doplňující studium k rozšíření odborné kvalifikace (DVPP)
        jazyková zkouška min. C1 SERR pro jazyky
		doplňující didaktické studium příslušného jazyka
		studium pedagogiky
		rodilý mluvčí/ na úrovni rodilého mluvčího
        výkonný či výtvarný umělec
        kvalifikovaný učitel uměleckých odborných předmětů v ZUŠ, SŠ a konzervatoři
        kvalifikovaný trenér
	"""

    for name in data.strip().split("\n"):
        OtherExperience.objects.get_or_create(name=name.strip())


def init_qualification_types():
    """
    Init for QualificationType
    """
    types = ["Titul", "Kurz CŽV", "Ostatní kvalifikace"]

    for type in types:
        QualificationType.objects.get_or_create(name=type)
