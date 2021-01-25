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
