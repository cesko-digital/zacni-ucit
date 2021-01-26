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

V druhe konzoli:

```
sleep 3
docker-compose restart app
docker-compose exec app bash

./manage.py migrate
./manage.py shell_plus

import init
init.init()
exit
```

Do prohlizece zadat adresu http://localhost:8300/. Na odkazu "Administrace" je dostupny admin pro spravu dat,
prihlasovaci jmeno `demo`, heslo `demo`.

Projekt ukoncis stiskem `<CTRL>+c` v prvni konzoli.


Graphene-Django Tutorial
https://docs.graphene-python.org/projects/django/en/latest/tutorial-plain/



Pusteni Neo4J pres Docker
https://rtfm.co.ua/en/neo4j-graph-database-run-with-docker-and-cypher-ql-examples/


Project initial setup:

1) pip install -r requirements.txt
2) cp .env.sample .env
3) python manage.py load_sample_data

Visit this url and if everythings went as expected, you should be able to see sample data
http://127.0.0.1:8000/graphql/#query=%7BallSchoolLevels%7B%0A%20%20id%0A%20%20name%0A%20%20description%0A%7D%7D
