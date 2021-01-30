from .models import Subject


def init_subjects_2021_01():
    """
    Zdroj: https://docs.google.com/spreadsheets/d/1msJu1AX_-wYLbhvz8rqsZxFMBwX7-xzghCAFHeeBQEI/edit#gid=2008534637
    Nejasnost s dvojim vyznamem "CJ":
        Cizí jazyk	CJ
        Další cizí jazyk	CJ
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
