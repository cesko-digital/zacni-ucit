from .models import College, Faculty


def init_faculties_2021_01():
    """
    Zdroj: https://docs.google.com/spreadsheets/d/1_karAzypSkiUOgrp6cm0_PLCimXyzdunxuUbdZKqjvI/edit#gid=0
    Vybrane sloupce.
    """
    FACULTIES = """
        VŠE	Fakulta financí a účetnictví	19 000 Kč	Praha
        UK, FF	Filozofická fakulta	16 000 Kč	Praha
        UK, FF	Filozofická fakulta	16 000 Kč	Praha
        UK, PedF	Pedagogická fakulta	20 000 Kč	Praha
        UK, MFF	Matematicko-fyzikální fakulta	15 000 Kč	Praha
        UK, MFF	Matematicko-fyzikální fakulta	15 000 Kč	Praha
        UK, MFF	Matematicko-fyzikální fakulta	15 000 Kč	Praha
        UK, MFF	Matematicko-fyzikální fakulta	15 000 Kč	Praha
        ČVUT, MUVS	Masarykův ústav vyšších studií	0 Kč	Praha
        ČVUT, MUVS	Masarykův ústav vyšších studií	0 Kč	Praha
        ČZU, IVP	Institut vzdělávání a poradenství	0 Kč	Praha
        UK, PedF	Pedagogická fakulta	3 300 Kč	Praha
        DAMU	Divadelní fakulta	0 Kč	Praha
        DAMU	Divadelní fakulta	0 Kč	Praha
        UK, HTF	Husitská teologická fakulta	0 Kč	Praha
        MUNI, PdF	Pedagogická fakulta	0 Kč	Brno
        MUNI, PdF	Pedagogická fakulta	0 Kč	Brno
        VŠMVV & Učitel naživo	-	38 000 Kč	Praha
        MUNI, PdF	Pedagogická fakulta	31 600 Kč	Brno
        MUNI, PdF	Pedagogická fakulta	22 500 Kč	Brno
        MUNI, PdF	Pedagogická fakulta	23 700 Kč	Brno
        JČU, PF	Pedagogická fakulta	38 000 Kč	České Budějovice
        MENDELU, ICV	Institut celoživotního vzdělávání	12 900 Kč	Brno
        UHK, PdF	Pedagogická fakulta	15 000 Kč	Hradec Králové
        UHK, PdF	Pedagogická fakulta	13 900 Kč	Hradec Králové
        ZČU, FPe	Fakulta pedagogická	28 000 Kč	Plzeň
        ZČU, FPe	Fakulta pedagogická	28 000 Kč	Plzeň
        UJEP, PF	Pedagogická fakulta	19 500 Kč	Ústí nad Labem
        UJEP, PF	Pedagogická fakulta	21 000 Kč	Most
        UJEP, PF	Pedagogická fakulta	19 500 Kč	Ústí nad Labem
        UJEP, PF	Pedagogická fakulta	21 000 Kč	Most
        UPOL, PdF	Pedagogická fakulta	25 000 Kč	Olomouc
        UPOL, PdF	Pedagogická fakulta	15 300 Kč	Olomouc
        UPOL, PdF	Pedagogická fakulta	16 150 Kč	Olomouc
        OU, PdF	Pedagogická fakulta	25 000 Kč	Ostrava
        OU, PdF	Pedagogická fakulta	13 500 Kč	Ostrava
        UPa, FF	Fakulta filozofická	15 500 Kč	Pardubice
        UTB, FHS	Fakulta humanitních studií	11 000 Kč	Zlín
        UTB, FHS	Fakulta humanitních studií	19 000 Kč	Zlín
    """

    for (colleges, faculty_name, price, town) in [i.split("\t") for i in FACULTIES.strip().split("\n")]:
        for college_code in [i.strip() for i in colleges.strip().split(",")]:
            college, _ = College.objects.get_or_create(code=college_code.strip())
            Faculty.objects.get_or_create(name=faculty_name.strip(), college=college, town=town.strip())
