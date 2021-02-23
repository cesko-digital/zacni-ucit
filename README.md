Projekt Zacniucit.cz.

# Zbuildeni

Pred prvnim spustenim musis nadefinovat vlastni environment promenne.
Otevri si terminal a v root adresari celeho projektu (mel by si videt
soubory `docker-compose.yml`, `CONTRIBUTING.md`) spust:

```
cp backend/.env.sample backend/.env
ln -s backend/.env
```

Otevri si v editoru `backend/.env`, dopln do prommenych tve vlastni hodnoty
a soubor uloz.  
POZOR! Hodnota promenne `NEO4J_USER` **musi** byt nastavena na `neo4j`.

V konzoli spust:

```
docker-compose build
```

Tento krok staci udelat jen jednou, pote co si stahnes projekt z GitHubu.


# Spusteni

V terminalu spust:

```
docker-compose up
```

Pockej ~10 vterin (prvni start PostgreSQL a Neo4j trva dyl) a pak v druhe konzoli:

```
docker-compose exec backend bash

./manage.py migrate
```

V tuto chvili najel kompletni backend stack -- relacni databaze Postgres, grafova
databaze Neo4j (s konzoli dostupnou na adrese http://localhost:7474, backendova 
aplikace (dostupna na adrese http://localhost:8300) a kontejner pro scrapovani dat
o kurzech.


# Data

## Zakladni initial data

V terminalu spust:

```
docker-compose exec backend bash
./manage.py shell_plus

import init
init.init()  # prip. init.init(neo4j=True), viz nize
exit
```

Init se postara o:

* vytvoreni uzivatele "demo@zacniucit.cz" s heslem "demo", pres ktereho je mozne se prihlasit
do administace na adrese http://localhost:8300/admin/
* nahrani statickych dat ulozenych u jednotlivych aplikacich v souborech `temp.py`; napriklad
seznam predmetu, typy skol, apod
* nahrani seznamu vysokych skol a fakult (pouze v pripade ze najde soubor `backend/temp/vs.xlsx`;
pokud soubor chybi, je mozne tato data nahrat manualne, viz "Seznam vysokych skol a fakult"
nize
* preklopeni dat do grafove database Neo4j (v pripade ze je init spusten s parametrem
`init(neo4j=Tue)`)

## Seznam vysokych skol a fakult

Vlez na https://regvssp.msmt.cz/registrvssp/cvslist.aspx, klikni na tlacitko "Export XLSX"
a uloz si do pocitace XLSX tabulku. Presun soubor do adresare `backend/` a spust prikaz:

```
./manage.py import_msmt_college_registry <cesta_k_XLSX_souboru>
```