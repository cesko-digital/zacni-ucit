# Datove modely

Projekt je rozdelen na nasledujici aplikace:

* **Accounts**  
  Profil nasich uzivatelu s kontaktnimi informacemi.
* **Colleges**  
  Seznam vysokych skol, jejich fakult a kurzu.
* **Conditions**  
  Prepis zakona o pedagogickych pracovnicich do datovych struktur.
* **Qualifications**  
  Modely mapujici vzdelani.
* **Teaching**  
  Zakladni struktury ve vztahu ke skolstvi (typy a urovne skol, seznam predmetu).


## Aplikace Accounts

Zatim realizovana v naprosto minimalisticke verzi (jmeno, prijmeni, email, heslo).
V budoucnu se pod Account ulozi informace o preferencich uzivatele.


## Aplikace Colleges

Sdruzuje informace o skolach, fakultach a kurzech.

### College

Vysoka skola.

Priklad dat:

* Masarykova univerzita
* Mendelova univerzita v Brně
* NEWTON College, a.s.
* Ostravská univerzita

Zdroj dat:
* https://regvssp.msmt.cz/registrvssp/cvslist.aspx  
  Oficialni data z MSMT

### Faculty

Fakulta vysoke skoly.

Priklad dat:

* Ekonomicko-správní fakulta / Masarykova univerzita
* Fakulta informatiky / Masarykova univerzita
* Lesnická a dřevařská fakulta / Mendelova univerzita v Brně 

Zdroj dat:
* https://regvssp.msmt.cz/registrvssp/cvslist.aspx  
  Oficialni data z MSMT

### Course

Kurz vypsany konkretni fakultou vysoke skoly.

Data do tohoto modelu mame v planu ziskavat s pomoci scraperu. Zatim mame relizovany
pouze jednoduchy "proof-of-concept" pro kurzy Univerzity Karlovy, ktery umi ziskat
seznam kurzu ze stranky a nasledne vyzobat par informaci z detailni popisu kurzu.

Pro realne pouziti to ale stale neni. Potrebujeme:

* seznam stranek ze kterych mame kurzy scrapovat (pokud se jedna jen o subset zobrazenych
  dat, pak je treba dodat konkretni informace o tom jak nastavit filtry ve vypisech,
  prip. jak rozpoznat kurz ktery nas zajima od ostatnich)
* podrobny rozbor informaci na strance s detailem kurzu, idealne formou okomentovaneho
  screenshotu -- ktere casti na strance jsou pro nas zajimave, co presne reprezentuji
  (cesky/anglicky nazev, popis)

Uvedene podklady je potreba zpracovat pro vice ruznych skol. Z vysledku pozname, jake
informace skoly o kurzech realne vypisuji, co je mozne z nich strojove ziskat. Domnivam
se, ze mnozstvi a kvalita dat bude kolisat skola od skoly, a bude trvat nez se k idealu
nastinenemu v [dokumentu][1] priblizime.

[1]: https://docs.google.com/spreadsheets/d/1_karAzypSkiUOgrp6cm0_PLCimXyzdunxuUbdZKqjvI/edit#gid=0


## Aplikace Qualification

### Title

Titul dosazeneho vzdelani.

Hodnoty:

* Bc.
* CŽV
* Dis.
* maturita
* Mgr.
* výuční list

Nejasnosti:
* aktualni data neodpovidaji informacim v Miru
  https://miro.com/app/board/o9J_lby_RpM=/?moveToWidget=3074457353995971483&cot=14
* zaznamy vznikl jako side effect importu dat do EducationType

### CollegeArea

Oblasti vysokoskolskeho vzdelavani.

Priklad hodnot:

* Architektura a urbanismus
* Bezpečnostní obory
* Biologie, ekologie a životní prostředí
* Chemie
* Doprava

Aktualne mame v databazi 37 zaznamu.

Zdroj dat:
* https://miro.com/app/board/o9J_lby_RpM=/?moveToWidget=3074457353765310458&cot=14
* https://docs.google.com/spreadsheets/d/1msJu1AX_-wYLbhvz8rqsZxFMBwX7-xzghCAFHeeBQEI/edit#gid=0

### CollegeProgramme

Studijni programy. Propojeni oblasti VS vzdelavani, predmetu a konkretnich studijnich programu.

Priklad:

* Studujni program _Architektura a urbanismus_ spada pod oblast vysokoskolskeho vzdelavani 
  _Architektura a urbanismus_. Umoznuje ucit _D_, _F_, _M_, _VV_
* Studujni program _Marketing_ spada pod oblast VS vzdelavani 
  _Ekonomicke obory_. Umoznuje ucit _CSP_, _M_, _MV_, _OV / ZSV_

Aktualne mame v databazi 219 zaznamu.

Zdroj dat:
* https://miro.com/app/board/o9J_lby_RpM=/?moveToWidget=3074457353765310458&cot=14
* https://docs.google.com/spreadsheets/d/1msJu1AX_-wYLbhvz8rqsZxFMBwX7-xzghCAFHeeBQEI/edit#gid=0

### EducationType

Typ vzdelani z hlediska zakona. Nejslozitejsi model aplikace `Teaching`, propojuje kombinace
samostatnych modelu do jednoho zaznamu.

Priklad:

* Typ kvalifikace: Kurz CZV
  Titul: CZV
  Oblast VS vzdelavani: --
  Typ pripravy ucitelu: uskutecnovanem VS a zamerenem na pripravu ucitelu
  Typ predmetu: --
  Stupen skoly: SS, Zakladni skola 2 stupen

Aktualne mame v databazi 28 zaznamu.

Zdroj dat: 
* https://miro.com/app/board/o9J_lby_RpM=/?moveToWidget=3074457353765310040&cot=14
* https://docs.google.com/spreadsheets/d/1W7xre-g4S_Y4LieKOHf-cIScdvU4Gp_i_4Ywvr5nw-8/edit#gid=1514467189

### EducationArea, SubjectType

Pomocne modely, na ktere se odkazuje EducationType.

Nejasnosti:
* Doresit nazvy modelu a popsat jejich vyznam.


## Aplikace Teaching

### Subject

Skolni predmet.

Priklad dat:

* Český jazyk a literatura - ČJL
* Chemie - CH
* Cizí jazyk - CJ
* Člověk a jeho svět (pouze 1. stupeň ZŠ) - ČAS
* Člověk a svět práce - ČSP
* Další cizí jazyk

Aktualne mame v databazi 30 zaznamu.

Zdroj dat:
* https://miro.com/app/board/o9J_lby_RpM=/?moveToWidget=3074457353765704174&cot=14
* https://docs.google.com/spreadsheets/d/1msJu1AX_-wYLbhvz8rqsZxFMBwX7-xzghCAFHeeBQEI/edit#gid=2008534637

### SchoolLevel

Stupne skol. Jednak zpresnuje zaznam o typu skoly, ale zaroven ma vazbu na predmety.

Data:

* Konzervatoře
* Mateřská škola - MŠ
* SŠ
* Střední škola - SŠ
* Střední škola - víceletá gymnázia, jejichž třídy odpovídají střednímu vzdělávání
* Základní škola - 1. stupeň
* Základní škola - 2. stupeň (+ odpovídající stupeň víceletých gymnázií, 6ti a 8mi letá)
* Základní škola - ZŠ

Zdroj dat:
* https://miro.com/app/board/o9J_lby_RpM=/?moveToWidget=3074457353765149370&cot=14

Nejasnosti
* nemelo by tohle mit vazbu na SchoolType?
  * napr. vazba na ZS, a upresneni ze jde o 1.stupen
  * v SchoolType ale chybi materske skoly, a je tam navic specka a ZUSka (je otazka jestli to necemu vadi)
  * tak jak to je ted to je nejake zbytecne duplikovane
* co vyjadruje vazba na predmety?
  * vycet toho co se na danem stupni uci?

### SchoolType

Typ skoly.

Data:

* Konzervatoř
* SŠ
* ZŠ
* ZŠ speciální
* ZUŠ - základní umělecká škola

Zdroj dat:
* https://miro.com/app/board/o9J_lby_RpM=/?moveToWidget=3074457353765149370&cot=14

### SchoolSubType

Presnejsi specifikace typu skoly. Odkazuje se na konkretni zaznam ze SchoolType a doplnuje jej
konkretnejsim znenim.

Priklad dat:

* gymnázium - SŠ
* hotelová škola - SŠ
* obchodní akademie - SŠ

Aktualne mame v databazi 18 zaznamu, vsechny upresnuji SchoolType=SŠ

Zdroj dat:
* https://miro.com/app/board/o9J_lby_RpM=/?moveToWidget=3074457353765149370&cot=14


### SubjectGroup

Predmetova skupina.

Zatim nevyuzito. V miru je listek s nasledujicimi daty:

```
Teaching / Predmetova skupina
- všeobecně vzdělávací předměty
- cizí jazyk
- tělesná výchova
- umělecké předměty
- odborné předměty
- praktické předměty
- konverzace
```

Zdroj dat:
* https://miro.com/app/board/o9J_lby_RpM=/?moveToWidget=3074457353765704174&cot=14


## Aplikace Conditions

Zatim nerealizovana.

Na Slacku se ladi nejake podklady, viz 
https://docs.google.com/spreadsheets/d/1mPvFm_5fgUjswlrOIkU2pnnTP4oIpy5b6GfxZFpt8iU/edit?ts=603a362c#gid=208878516
