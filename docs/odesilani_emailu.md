# Odesilani emailu

Pro rozesilani emailu budeme pouzivat sluzbu SendGrid a jeji sablony.
Zakladni integrace SendGridu je v backend kodu zaimplementovana prostrednictvim
balicku `anymail` a nekolika konfiguracnich hodnot v souboru 
`backend/zacniucit/settings.py`.

## Odeslani plaintext emailu

```python
from django.core.mail import send_mail
send_mail("Predmet zpravy", "Obsah zpravy", "notifications@cesko.digital", [<email-adresata>])
```

## Odesilani emailu pres SendGrid sablony

SendGrid obsahuje WYSIWYG editor pro vytvareni HTML sablon. S jeho pomoci je mozne
seskladat slozitejsi emailovou zpravu obsahujici text, obrazky, tlacitka, ale hlavne
promenne, do kterych se naliji konkretni data.

Napr. muzeme mit obecnou welcome sablonu do hlaviccky a uvodni vety obsahu umistime
promennou `{{ jmeno }}` (tj. odeslany email bude pekne personifikovany). Na strane
backendu email odesleme takto:

```python
from django.core.mail import EmailMessage
message = EmailMessage(to=[<email-adresata>], from_email='notifications@cesko.digital')
message.template_id = '<id-sendgrid-sablony>'
message.merge_global_data = {'jmeno': 'Pavle'}
message.send()
```

ID sablony je k nalezeni v sekci Email API -> Dynamic Templates. Na strance se objevi
seznam sablon, a po rozkliknuti nektere z nich se objevi nahled s detailnejsimi
informacemi vcetne `Template ID`.

## Poznamky

CeskoDigital momentalne nema multiuser licenci pro SendGrid. Z tohoto duvodu ma do nej
pristup pouze omezeny pocet lidi.

V pripade potreby (API klic, pristup do sablonovaciho nastroje SendGridu) kontaktuj 
Michala Valouska nebo Martin Wenische.