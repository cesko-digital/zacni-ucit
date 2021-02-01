Zacniucit.cz backend server.

# Zbuildeni

Postup pro Linux/MacOS. Spust konzoli, presun se do adresare `backend` a spust:

```
docker-compose build
```

Tento krok staci udelat jen jednou, pote co si stahnes projekt z GitHubu.


# Spusteni

V prvni konzoli:

```
docker-compose up
```

Pockej ~5 vterin (prvni start PostgreSQL trva dyl) a pak v druhe konzoli:

```
docker-compose restart app
docker-compose exec app bash

./manage.py migrate
```


# Data

## Initial data

Spust:

```
docker-compose exec app bash
./manage.py shell_plus

import init
init.init()
exit
```

Do aplikace se nahraje seznam predmetu (vzdelavaci oblasti podle rvp), mapovani vs oboru na rvp, atd.
Zaroven se vytvori uzivatel "demo" s heslem "demo", pres ktereho je mozne se prihlasit do administace
na adrese http://localhost:8300/admin/.

## Seznam vysokych skol a fakult

Vlez na https://regvssp.msmt.cz/registrvssp/cvslist.aspx, klikni na tlacitko "Export XLSX"
a uloz si do pocitace XLSX tabulku. Presun soubor do adresare `backend/` a spust prikaz:

```
./manage.py import_msmt_college_registry <cesta_k_XLSX_souboru>
```

GraphQL: 
GraphQL endpoint je na addrese <protokol>://<domain>/graphql/
