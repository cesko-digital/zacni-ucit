from .models import Subject, SchoolType, SchoolLevel


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
    for name in [i.strip() for i in data.strip().split("\n")]:
        SchoolLevel.objects.get_or_create(name=name)


def init_school_type_2021_02():
    """
    Zdroj https://miro.com/app/board/o9J_lby_RpM=/?moveToWidget=3074457353595062463&cot=14
    a v nem uvedene listecky s referenci na:
    * https://www.atlasskolstvi.cz/stredni-skoly
    * https://www.zakonyprolidi.cz/cs/2005-13#cast1
    """
    data = """
        ZŠ
        ZŠ speciální
        SŠ - gymnázium
        SŠ - střední odborná škola
        SŠ - střední odborné učiliště
        SŠ - střední průmyslová škola
        SŠ - střední zemědělská škola
        SŠ - střední zahradnická škola
        SŠ - střední vinařská škola
        SŠ - střední lesnická škola
        SŠ - střední rybářská škola
        SŠ - střední zdravotnická škola
        SŠ - hotelová škola
        SŠ - střední pedagogická škola
        SŠ - střední umělecká škola
        SŠ - střední uměleckoprůmyslová škola
        SŠ - obchodní akademie
        SŠ - odborná škola
        SŠ - odborné učiliště
        SŠ - praktická škola
        Konzervatoř
        ZUŠ - základní umělecká škola
    """
    for name in [i.strip() for i in data.strip().split("\n")]:
        SchoolType.objects.get_or_create(name=name)
