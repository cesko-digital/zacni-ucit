from urllib.parse import urlparse
from teaching.models import Subject
from .models import Faculty, Course


def init_courses_2021_01():
    """
    Zdroj: https://docs.google.com/spreadsheets/d/1_karAzypSkiUOgrp6cm0_PLCimXyzdunxuUbdZKqjvI/edit#gid=0
    Bacha, viceradkova poznamka, znak 0x0a v cene, nejasnosti kolem pojmenovani "filozoficka fakulta" vs "fakulta filozoficka"
    """
    COURSES = """
        Doplňující pedagogické studium pro inženýry ekonomy k získání pedagogické kvalifikace k výuce ekonomických předmětů pro střední a vyšší odborné školy	VSE	Fakulta financí a účetnictví	19 000 Kč	Praha	2	kombinovaná	https://kdep.vse.cz/akce-pro-verejnost/doplnujici-pedagogicke-studium/	ODBP																											CŽV uskutečňovaném VŠ a zaměřeném na přípravu učitelů SŠ	
        Učitelství pro střední školy	UK, FF	Filozofická fakulta	16 000 Kč	Praha	4	prezenční	https://kps.ff.cuni.cz/cs/ucitelstvi/ucitelstvi-pro-ss/ucitelstvi-pro-stredni-skoly/	CJ	ČJL	MV	D	OV / ZSV	HV	VKZ	ČSP	OSV	Z	VDO	EGS																CŽV uskutečňovaném VŠ a zaměřeném na přípravu učitelů SŠ	
        Učitelství pro SŠ – společenské, ekonomické a právní vědy	UK, FF	Filozofická fakulta	16 000 Kč	Praha	4	prezenční	https://kps.ff.cuni.cz/cs/ucitelstvi/ucitelstvi-pro-ss/ucitelstvi-pro-ss-spolecenske-ekonomicke-a-pravni-vedy/	OV / ZSV	D	VKZ	ČSP	OSV	VDO	EGS	MKV	ENV	MV	ODBP																	CŽV uskutečňovaném VŠ a zaměřeném na přípravu učitelů SŠ	
        Učitelství občanské výchovy a základů společenských věd pro SŠ a 2. stupeň ZŠ	UK, PedF	Pedagogická fakulta	20 000 Kč	Praha	4	kombinovaná	http://kovf.pedf.cuni.cz/studium/oborova-studia/rozsirujici-studium-ucitelstvi-ov-a-zsv/informace-o-studiu	OV / ZSV																											doplňující studium k rozšíření odborné kvalifikace (DVPP)	
        Studium v oblasti pedagogických věd k získání kvalifikace učitele	UK, MFF	Matematicko-fyzikální fakulta	15 000 Kč	Praha	6	kombinovaná	https://www.mff.cuni.cz/cs/studenti/celozivotni-vzdelavani/studium-v-oblasti-pedagogickych-ved-k-ziskani-kvalifikace-ucitele	F	M	IKT																									CŽV uskutečňovaném VŠ a zaměřeném na přípravu učitelů 2. stupně ZŠ nebo SŠ	
        Vyučování všeobecně vzdělávacího předmětu informatika	UK, MFF	Matematicko-fyzikální fakulta	15 000 Kč	Praha	6	kombinovaná	https://www.mff.cuni.cz/cs/studenti/celozivotni-vzdelavani/vyucovani-vseobecne-vzdelavacich-predmetu-nove	IKT																											doplňující studium k rozšíření odborné kvalifikace (DVPP)	
        Vyučování všeobecně vzdělávacího předmětu fyzika	UK, MFF	Matematicko-fyzikální fakulta	15 000 Kč	Praha	6	kombinovaná	https://www.mff.cuni.cz/cs/studenti/celozivotni-vzdelavani/vyucovani-vseobecne-vzdelavacich-predmetu-nove	F																											doplňující studium k rozšíření odborné kvalifikace (DVPP)	
        Vyučování všeobecně vzdělávacího předmětu matematika	UK, MFF	Matematicko-fyzikální fakulta	15 000 Kč	Praha	6	kombinovaná	https://www.mff.cuni.cz/cs/studenti/celozivotni-vzdelavani/vyucovani-vseobecne-vzdelavacich-predmetu-nove	M																											doplňující studium k rozšíření odborné kvalifikace (DVPP)	
        Učitelství odborných předmětů	CVUT, MUVS	Masarykův ústav vyšších studií	0 Kč	Praha	6	prezenční, kombinovaná	https://www.muvs.cvut.cz/zajemci-o-studium/bakalarske-studium/ucitelstvi-odbornych-predmetu/	ODBP																											Bc., pedagogické vědy, příprava učitelů 2. stupně ZŠ nebo SŠ	
        Učitelství praktického vyučování a odborného výcviku	CVUT, MUVS	Masarykův ústav vyšších studií	0 Kč	Praha	6	kombinovaná	https://www.muvs.cvut.cz/zajemci-o-studium/bakalarske-studium/ucitelstvi-praktickeho-vyucovani-a-odborneho-vycviku/	PV	ODBV																										Bc., pedagogické vědy, příprava učitelů 2. stupně ZŠ nebo SŠ	
        Učitelství praktického vyučování	CZU, IVP	Institut vzdělávání a poradenství	0 Kč	Praha	6	kombinovaná	https://www.ivp.czu.cz/cs/r-6930-studium/r-7469-studijni-programy/r-8775-programy-bakalarskeho-studia/r-8779-ucitelstvi-praktickeho-vyucovani	ODBP																											Bc., pedagogické vědy, příprava učitelů 2. stupně ZŠ nebo SŠ	
        Hudební výchova pro učitele MŠ a ZŠ	UK, PedF	Pedagogická fakulta	3 300 Kč	Praha	1	kombinovaná	https://pages.pedf.cuni.cz/khv/celozivotni-vzdelavani/czv-jednosemestralni-kurz/	HV																											doplňující studium k rozšíření odborné kvalifikace (DVPP)	
        Dramatická výchova	DAMU	Divadelní fakulta	0 Kč	Praha	6	prezenční, kombinovaná	https://www.damu.cz/cs/katedry-programy/katedra-vychovne-dramatiky/studijni-programy/B0215A310008-dramaticka-vychova-bakalarsky/	DV																											Bc., pedagogické vědy, příprava učitelů	
        Dramatická výchova	DAMU	Divadelní fakulta	0 Kč	Praha	4	prezenční, kombinovaná	https://www.damu.cz/cs/katedry-programy/katedra-vychovne-dramatiky/studijni-programy/N0215A310006-dramaticka-vychova-navazujici-magistersky/	DV																											Mgr., umění, umělecko–pedagogické zaměření	
        Učitelství náboženství a základů společenských věd pro střední školy	UK, HTF	Husitská teologická fakulta	0 Kč	Praha	4	prezenční	https://is.cuni.cz/studium/prijimacky/index.php?do=detail_obor&id_obor=24800	OV / ZSV	ETV																										Mgr., pedagogické vědy, příprava učitelů všeobecně-vzdělávacích předmětů SŠ	
        Dějepis se zaměřením na vzdělávání	MUNI, PdF	Pedagogická fakulta	0 Kč	Brno	6	prezenční, kombinovaná	https://www.muni.cz/bakalarske-a-magisterske-obory/23782-dejepis-se-zamerenim-na-vzdelavani	D																											Bc., pedagogické vědy, příprava učitelů	
        Český jazyk a literatura se zaměřením na vzdělávání	MUNI, PdF	Pedagogická fakulta	0 Kč	Brno	6	prezenční	https://www.muni.cz/bakalarske-a-magisterske-obory/23849-cesky-jazyk-a-literatura-se-zamerenim-na-vzdelavani	ČJL	MV																										Bc., pedagogické vědy, příprava učitelů	
        Učitel naživo	VŠMVV & Učitel naživo	-	38 000 Kč	Praha	4	kombinovaná	https://www.ucitelnazivo.cz/o-programu	ČJL	CJ	M	IKT	D	OV / ZSV	F	CH	PŘ	Z	HV	VV	VKZ	ČSP	DV	ETV	FAV	TPV	OSV	VDO	EGS	MKV	ENV	MV	ODBP	PV	ODBV	CŽV uskutečňovaném VŠ a zaměřeném na přípravu učitelů 2. stupně ZŠ nebo SŠ	
        Učitelství praktického vyučování	MUNI, PdF	Pedagogická fakulta	31 600 Kč	Brno	4	kombinovaná	https://www.ped.muni.cz/czv/pro-zajemce-o-czv/programy-czv/ucitelstvi-praktickeho-vyucovani	PV	ODBV																										CŽV uskutečňovaném VŠ a zaměřeném na přípravu učitelů 2. stupně ZŠ nebo SŠ	
        Studium v oblasti pedagogických věd zaměřené na přípravu učitelů 2. stupně ZŠ a SŠ	MUNI, PdF	Pedagogická fakulta	22 500 Kč	Brno	3	kombinovaná	https://www.ped.muni.cz/czv/pro-zajemce-o-czv/programy-czv/studium-v-oblasti-pedagogickych-ved-zamerene-na-pripravu-ucitelu-2-stupne-zs-a-ss	CJ	PŘ	ČJL	D	F	Z	HV	CH	M	OV / ZSV	IKT	VV	VKZ															CŽV uskutečňovaném VŠ a zaměřeném na přípravu učitelů 2. stupně ZŠ nebo SŠ	
        Učitel odborných předmětů na středních školách	MUNI, PdF	Pedagogická fakulta	23 700 Kč	Brno	3	kombinovaná	https://www.ped.muni.cz/czv/pro-zajemce-o-czv/programy-czv/dps-ucitel-odbornych-predmetu-na-strednich-skolach	ODBP																											CŽV uskutečňovaném VŠ a zaměřeném na přípravu učitelů SŠ	
        Učitelství informatiky pro 2. stupeň ZŠ	JCU, PF	Pedagogická fakulta	38 000 Kč	České Budějovice	4	kombinovaná	https://www.pf.jcu.cz/education/department/czv/dvpp-it_zs.php	IKT																											doplňující studium k rozšíření odborné kvalifikace (DVPP)	
        Studium pedagogiky	MENDELU, ICV	Institut celoživotního vzdělávání	12 900 Kč	Brno	3	kombinovaná	https://icv.mendelu.cz/32509n-studium-pedagogiky	ODBP	PV	ODBV																									studium pedagogiky	
        Učitel odborného výcviku a učitel praktického vyučování	UHK, PdF	Pedagogická fakulta	15 000 Kč	Hradec Králové	2	kombinovaná	https://czv.uhk.cz/dps/uov_upv.php	PV	ODBV																										CŽV uskutečňovaném VŠ a zaměřeném na přípravu učitelů SŠ	
        Učitel střední školy	UHK, PdF	Pedagogická fakulta	13 900 Kč	Hradec Králové	2	kombinovaná	https://czv.uhk.cz/dps/uss.php	ODBP																											CŽV uskutečňovaném VŠ a zaměřeném na přípravu učitelů SŠ	
        Studium v oblasti pedagogických věd se zaměřením na přípravu učitelů odborných předmětů - UOP na SŠ - Pedagogické studium A	ZCU, FPe	Fakulta pedagogická	28 000 Kč	Plzeň	4	kombinovaná	https://www.pc.fpe.zcu.cz/kurz.php?k=33&c=18	ODBP																											?	
        Studium v oblasti pedagogických věd se zaměřením na přípravu učitelů praktického vyučování - UPV a odborného výcviku - UOV na SŠ - Pedagogické studium - B + C	ZCU, FPe	Fakulta pedagogická	28 000 Kč	Plzeň	4	kombinovaná	https://www.pc.fpe.zcu.cz/kurz.php?k=34&c=18	PV	ODBV																										?	
        Učitelství odborných předmětů střední školy	UJEP, PF	Pedagogická fakulta	19 500 Kč	Ústí nad Labem	3	kombinovaná	https://www.pf.ujep.cz/cs/2780/studium-v-oblasti-pedagogickych-ved-ucitelstvi-odbornych-predmetu-stredni-skoly-e-prihlaska-spv-u	ODBP																											CŽV uskutečňovaném VŠ a zaměřeném na přípravu učitelů	
        Učitelství odborných předmětů střední školy	UJEP, PF	Pedagogická fakulta	21 000 Kč	Most	3	kombinovaná	https://www.pf.ujep.cz/cs/2780/studium-v-oblasti-pedagogickych-ved-ucitelstvi-odbornych-predmetu-stredni-skoly-e-prihlaska-spv-u	ODBP																											CŽV uskutečňovaném VŠ a zaměřeném na přípravu učitelů	
        Učitelství druhého stupně základní školy a všeobecně vzdělávacích předmětů střední školy	UJEP, PF	Pedagogická fakulta	19 500 Kč	Ústí nad Labem	3	kombinovaná	https://www.pf.ujep.cz/cs/2778/studium-v-oblasti-pedagogickych-ved-ucitelstvi-druheho-stupne-zakladni-skoly-a-vseobecne-vzdelavacich-predmetu-stredni-skoly-e-prihlaska-spv-u	ČJL	CJ	M	IKT	D	OV / ZSV	F	CH	PŘ	Z	HV	VV	VKZ	ČSP	DV	ETV	FAV	TPV	OSV	VDO	EGS	MKV	ENV	MV	ODBP	PV	ODBV	CŽV uskutečňovaném VŠ a zaměřeném na přípravu učitelů 2. stupně ZŠ nebo SŠ	
        Učitelství druhého stupně základní školy a všeobecně vzdělávacích předmětů střední školy	UJEP, PF	Pedagogická fakulta	21 000 Kč	Most	3	kombinovaná	https://www.pf.ujep.cz/cs/2778/studium-v-oblasti-pedagogickych-ved-ucitelstvi-druheho-stupne-zakladni-skoly-a-vseobecne-vzdelavacich-predmetu-stredni-skoly-e-prihlaska-spv-u	ČJL	CJ	M	IKT	D	OV / ZSV	F	CH	PŘ	Z	HV	VV	VKZ	ČSP	DV	ETV	FAV	TPV	OSV	VDO	EGS	MKV	ENV	MV	ODBP	PV	ODBV	CŽV uskutečňovaném VŠ a zaměřeném na přípravu učitelů 2. stupně ZŠ nebo SŠ	
        Doplňující pedagogické studium zaměřené na přípravu učitelů 2. stupně ZŠ a SŠ	UPOL, PdF	Pedagogická fakulta	25 000 Kč	Olomouc	4	kombinovaná	https://ccv.upol.cz/studijni-programy-czv-detail/1/doplujc-pedagogick-studium-zamen-na-ppravu-uitel-2.-stupn-z-a-s	ČJL	CJ	M	IKT	D	OV / ZSV	F	CH	PŘ	Z	HV	VV	VKZ	ČSP	DV	ETV	FAV	TPV	OSV	VDO	EGS	MKV	ENV	MV	ODBP	PV	ODBV	CŽV uskutečňovaném VŠ a zaměřeném na přípravu učitelů 2. stupně ZŠ nebo SŠ	
        Pedagogické studium učitelů odborného výcviku	UPOL, PdF	Pedagogická fakulta	15 300 Kč	Olomouc	3	kombinovaná	https://ccv.upol.cz/studijni-programy-czv-detail/2/pedagogick-studium-uitel-odbornho-vcviku	ODBV																											CŽV uskutečňovaném VŠ a zaměřeném na přípravu učitelů SŠ	
        Pedagogické studium učitelů praktického vyučování a odborného výcviku	UPOL, PdF	Pedagogická fakulta	16 150 Kč	Olomouc	3	kombinovaná	https://ccv.upol.cz/studijni-programy-czv-detail/3/pedagogick-studium-uitel-praktickho-vyuovn-a-odbornho-vcviku	PV	ODBV																										CŽV uskutečňovaném VŠ a zaměřeném na přípravu učitelů SŠ	
        Pedagogické studium pro učitele středních škol a 2. stupně základních škol	OU, PdF	Pedagogická fakulta	25 000 Kč	Ostrava	4	kombinovaná	https://www.osu.cz/celozivotni-vzdelavani/?idkurz=110	ČJL	CJ	M	IKT	D	OV / ZSV	F	CH	PŘ	Z	HV	VV	VKZ	ČSP	DV	ETV	FAV	TPV	OSV	VDO	EGS	MKV	ENV	MV	ODBP	PV	ODBV	CŽV uskutečňovaném VŠ a zaměřeném na přípravu učitelů 2. stupně ZŠ nebo SŠ	
        Studium pedagogiky pro učitele praktického vyučování a učitele odborného výcviku	OU, PdF	Pedagogická fakulta	13 500 Kč	Ostrava	2	kombinovaná	https://www.osu.cz/celozivotni-vzdelavani/?idkurz=109	PV	ODBV																										CŽV uskutečňovaném VŠ a zaměřeném na přípravu učitelů SŠ	
        Doplňující pedagogické studium	UPa, FF	Fakulta filozofická	15 500 Kč	Pardubice	4	kombinovaná	https://ff.upce.cz/ff/kvv/doplnkovestudium/informace.html?_ga=2.160733885.1258870679.1609767356-80599523.1609767356	ČJL	CJ	M	IKT	D	OV / ZSV	F	CH	PŘ	Z	HV	VV	VKZ	ČSP	DV	ETV	FAV	TPV	OSV	VDO	EGS	MKV	ENV	MV	ODBP	PV	ODBV	CŽV uskutečňovaném VŠ a zaměřeném na přípravu učitelů 2. stupně ZŠ nebo SŠ	
        Studium pedagogiky pro učitele odborného výcviku a učitele praktického vyučování	UTB, FHS	Fakulta humanitních studií	11 000 Kč	Zlín	2	kombinovaná	https://fhs.utb.cz/aktuality-ustavy/aktuality-usp/studium-pedagogiky-pro-ucitele-odborneho-vycviku-a-ucitele-praktickeho-vyucovani	PV	ODBV																										CŽV uskutečňovaném VŠ a zaměřeném na přípravu učitelů SŠ	
        Studium v oblasti pedagogických věd pro učitele 2. stupně ZŠ A SŠ	UTB, FHS	Fakulta humanitních studií	19 000 Kč	Zlín	3	kombinovaná	https://fhs.utb.cz/aktuality-ustavy/aktuality-usp/studium-v-oblasti-pedagogickych-ved-pro-ucitele-2-stupne-zs-a-ss	CJ	PŘ	D	VKZ	CH	OV / ZSV	ETV	HV	TV	DV	ČJL																	CŽV uskutečňovaném VŠ a zaměřeném na přípravu učitelů 2. stupně ZŠ nebo SŠ	
    """
    COLUMNS = "Název	Vysoká škola	Fakulta	Cena	Město	SDS / semestr	Forma studia	Odkaz na více info	Předměty																											Podmínky	Platnost"
    columns = []
    idx = 1
    for k in [i.strip() for i in COLUMNS.strip().split("\t")]:
        if not k:
            k = f"s-{idx}"
            idx += 1
        columns.append(k)
    courses = [dict(zip(columns, i.strip().split("\t"))) for i in COURSES.strip().split("\n")]

    for course in courses:
        try:
            colleges = course["Vysoká škola"].strip().split(",")
        except:
            breakpoint()
        price = int(course["Cena"].replace("Kč", "").replace(" ", "").strip())
        sds = int(course["SDS / semestr"].strip())
        form = [i.strip() for i in course["Forma studia"].strip().split(",")]

        for college_code in colleges:
            # TODO Currently leaving first, when we get updated data, we have to change it
            faculty = Faculty.objects.filter(name=course["Fakulta"]).first()
            c, created = Course.objects.get_or_create(
                name=course["Název"].strip(),
                faculty=faculty,
                price=price,
                sds=sds,
                form_present="prezenční" in form,
                form_combined="kombinovaná" in form,
                url=course["Odkaz na více info"].strip(),
                # note=course['Poznámka'].strip()
            )
            if not created:
                c.subjects.clear()

            subjects = []
            for subject_col in [i for i in columns if i.startswith("s-")]:
                if not course[subject_col]:
                    continue
                try:
                    subjects.append(Subject.objects.get(code=course[subject_col].strip()))
                except:
                    breakpoint()
            c.subjects.add(*subjects)