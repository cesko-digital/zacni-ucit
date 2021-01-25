from .models import CollegeArea, CollegeProgramme
from rvp.models import Subject


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
