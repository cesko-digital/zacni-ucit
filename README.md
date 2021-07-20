Projekt Zacniucit.cz.

# Základní požadavky na instalaci projektu

- Python 3.6+
- PostreSQL 10+ (pokud si chceš db zprovoznit u sebe na localhostu)
- PIP (kvůli instalaci requirements)
- Node.js
- npm
- Yarn

# PostgreSQL - Instalace a spuštění na localhostu

Pokud máš databázi PostgreSQL již na svém počítači nainstalovanou, můžeš
tento krok přeskočit. Pokud ji potřebuješ nainstalovat a zprovoznit, níže
jsou návody podle OS, který používáš pro vývoj.

V návodech se pracuje s PostgreSQL verzí 13.

- Fedora: https://computingforgeeks.com/install-postgresql-13-on-fedora/
- Ubuntu: https://computingforgeeks.com/how-to-install-postgresql-13-on-ubuntu/
- Windows: https://techexpert.tips/windows/installing-postgresql-windows/
- MacOS: https://www.sqlservercentral.com/articles/getting-started-with-postgresql-on-macos

# Backend - Instalace a spuštění virtuálního prostředí

Ještě než začneš řešit projekt samotný, vytvoř si u sebe na localhostu
virtuální prostředí. Otevři si terminál a v kořenovém adresáři celého
projektu (jsou v něm soubory jako např. CONTRIBUTING.md, toto README.md)
spusť např. příkaz:

```
virtualenv-3 .venv
```

Ve složce ".venv" se ti budou ukládat všechny python balíčky a nebudou ti
tak narušovat strukturu jiných projektů (jejich závislosti), které máš
na localhostu.

Virtuální prostředí pak aktivuješ příkazem:

```
source .venv/bin/activate
```

# Backend - Spuštění projektu

Jsme ve virtuálním prostředí a teď je potřeba už konfigurovat a spustit projekt.
Nejprve si nainstalujeme všechny povinný requirements pro backend. To uděláme
příkazem (stále zůstaň v kořenovém adresáři projektu):

```
pip install -r backend/requirements.txt
```

Může se stát, že ti instalace requirements skončí chybou na balíčku psycopg:

```
Error: pg_config executable not found.
```

Pokud ano, je potřeba přidat bin adresář PostgreSQL do systémového PATH.
U mě bylo potřeba přidat PostgreSQL 11 bin adresář takto:

```
export PATH=$PATH:/usr/pgsql-11/bin/
```

Pak je možno příkaz pro instalaci requirements opakovat a vše proběhne v pořádku.

Po instalaci requirements je potřeba vydefinovat enviroment proměnné.
Zkopíruj si sample .env příkazem:

```
cp backend/.env.sample backend/.env
```

Tímto příkazem se ti vytvořil výchozí ".env" soubor, kde si vydefinuješ vlastní
hodnoty pro správný běh projektu (zejména připojení k databázi).

Tento soubor otevři v editoru a doplň do něj své vlastní hodnoty. Vypadat to může
např. takto (pokud si databázi zprovozníš přímo u sebe a nepoužiješ tu, co máme
ve VPNce, jinak tam doplň credentials k DB, co máš od nás):

```
DATABASE_NAME=web_zacniucit
DATABASE_USER=web_zacniucit
DATABASE_PASSWORD=zacni_ucit_heslo_abc89d1
DATABASE_HOST=localhost
DATABASE_PORT=5432

DJANGO_SECRET=27383abcdef2738fcd
DJANGO_ALLOWED_HOSTS=*
DJANGO_CORS_ALLOWED_ORIGINS=
SENDGRID_API_KEY=
```

Pokud máš databázi lokálně (nepoužíváš tu ve VPNce), pak ještě udělej migrace:

```
python backend/manage.py migrate
```

A nakonec spusť backend projektu:

```
python backend/manage.py runserver 8300
```

Backend se následně spustí na http://localhost:8300.


# Frontend - Spuštění projektu

Pro spuštění frontendu projektu, se přesuň do adresáře frontend:

```
cd frontend
```

A odtud spusť příkaz:

```
yarn install
```

Nainstalují se mi všechny závislosti. Frontend následně spustíš příkazem:

```
yarn dev
```

Frontend se následně spustí na http://localhost:3000.


# Připojení do VPN projektu

Testovací verze aplikace běží na veřejné URL adrese https://zacniucit.ceskodigital.net.
Přístup k databázi a GraphQL rozhraní s dokumentací jsou však dostupné pouze, pokud se připojíš
do VPNky projektu.

Pokud jsi neobdržel(a) prozatím přístupové údaje (config) do VPN, požádej Honzu Koprajdu
nebo Martina Wenishe. Podobně, pokud potřebuješ přístupové údaje do databáze ve VPN.
Loginy a hesla nejsou součástí tohoto README. Je potřeba, aby ses o ně přihlásil.

## Odkazy

- Veřejný test: https://zacniucit.ceskodigital.net
- GraphQL (pouze přes VPN): http://zacniucit-elb-406a2c6714d8ca1b.elb.eu-central-1.amazonaws.com:8300/graphql/


# NEAKTUÁLNÍ

Init se postara o:

* vytvoreni uzivatele "demo@zacniucit.cz" s heslem "demo", pres ktereho je mozne se prihlasit
do administace na adrese http://localhost:8300/admin/
* nahrani statickych dat ulozenych u jednotlivych aplikacich v souborech `temp.py`; napriklad
seznam predmetu, typy skol, apod
* nahrani seznamu vysokych skol a fakult (pouze v pripade ze najde soubor `backend/temp/vs.xlsx`;
pokud soubor chybi, je mozne tato data nahrat manualne, viz "Seznam vysokych skol a fakult"
nize

## Seznam vysokych skol a fakult

Vlez na https://regvssp.msmt.cz/registrvssp/cvslist.aspx, klikni na tlacitko "Export XLSX"
a uloz si do pocitace XLSX tabulku. Presun soubor do adresare `backend/` a spust prikaz:

```
./manage.py import_msmt_college_registry <cesta_k_XLSX_souboru>
```
