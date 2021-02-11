# Jak přispívat

## Jazyk

V anglickém jazyce:

* Kód
* Komentáře
* Commit zprávy

V českém jazyce:

* README a jakákoliv jiná dokumentace
* Issues a pull requesty

##Schvalování pull requestů

Z celého týmu mají odpovědnost za schvalování PR 
* Za backend: Michal Valoušek a David Šimek
* Za frontend: Václav Stejskal a Jiří Petera

Pravidla
* PR musí schválit vždy jiný člověk než ten co PR vytvořil
* Informace o novém PR je potřeba napsat do dev kanálu na slacku
* Veškerá konverzace k PR by měla proběhnout ve vláknu k danému postu ve slacku, případně na github
* Merge dělá za backend: Michal Valoušek a za frontend: Václav Stejskal

## Publikování kódu

Začni naklonováním repozitáře do svého počítače:

```
git clone git@github.com:cesko-digital/zacni-ucit.git

```

Pokud naimplementuješ novou funkcionalitu nebo vytvoříš bugfix, postupuj takto:

* Přepni se do větve `master`: `git checkout master`
* Vytvoř novou větev `git checkout -b <jmeno>/<vetev>-<cislo_issue>`.
  Například, pokud se na základě [Trello](https://trello.com/b/zrTT6Cdn/za%C4%8Dni-u%C4%8Dit)
  ticketu \#123 rozhodneš napsat nový scraper kurzů Masarykovy univerzity,
  pojmenuj větev jako `michal/mu-scraper-123`. Jestliže Trello ticket neexistuje, 
  větev pojmenuj `michal/mu-scraper`.
* Po dokončení implementace publikuj kód na Github:  
  `git push origin/<jmeno>/<vetev>-<cislo_issue>`, tj. například
  `git push origin michal/mu-scraper-123`
* Vlez na [GitHub](https://github.com/cesko-digital/zacni-ucit) a vytvoř nový Pull Request.
  Dobře jej pojmenuj a popiš.
* Každý Pull Request je zkontrolován. Pokud se objeví nejasnosti, reaguj na komentáře
  a dotazy. Po schválení bude proveden merge do `master` větve a tvá branch bude smazána.

Snaž se publikovat rozumně velké Pull Requesty -- každý PR by měl rešit jedno issue,
míchání nesouvisejících funkcionalit není přípustné.

Do repozitáře neposílej cache, zkompilované soubory, OS specifické soubory, přihlašovací
údaje.
