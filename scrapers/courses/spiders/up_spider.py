"""
TODO:
-minor/major
    - nektere polozky z listu se lisi
        a) budto se u nich zobrazuje tlacitko "prihlaska"
        b) nebo "vybrat minor"
    - kdyz se klikne na minor, tak se to rozbali nekdy do docela dlouheho seznamu
    - navic se udela dalsi request na GetMinors endpoint
    - polozky v (a) a (b) maji trochu odlisna data:
        (a) ma "globalId=<hodnota>", "regulation=true", "oneField=true", "onlineAppForm=true"
        (b) ma "globalId=null", "regulation=false", "oneField=false", "onlineAppForm=false"

Chybi
- misto kde se kurz kona (neda se odvodit z fakulty?)
- penize
- ofiko ID
"""

import scrapy
from urllib.parse import parse_qs, urlencode
from scrapy.loader import ItemLoader
from scrapy.http import FormRequest
import time

from ..items import CourseItem


class UPCoursesSpider(scrapy.Spider):
    name = "up_courses"

    formdata = {
        "name": "",
        "type": "Bachelor",
        "skip": "0",
        "faculty": "",
        "language": "",
        "onlyActive": "false",
        "form": "",
        "fieldType": "",
        "fieldOfEducation": "",
    }
    list_url = "https://studium.upol.cz/Catalog/GetFields"
    detail_url = "https://studium.upol.cz/Catalog/GetStudyProgram"
    public_detail_url = "https://studium.upol.cz/Catalog/StudyPrograms"

    per_page = 10

    def start_requests(self):
        yield FormRequest(self.list_url, callback=self.parse, formdata=self.formdata.copy())

    def parse(self, response):
        """
        Example of JSON response for list:

        {
          "fields": [
            {
              "id": 5042,
              "combId": null,
              "studyProgramId": 0,
              "globalId": null,
              "code": null,
              "name": "Andragogika maior",
              "facultyShort": "FA",
              "faculty": "Faculty of Arts",
              "formName": "Full-time",
              "formShort": "FT",
              "type": "Bachelor's",
              "typeShort": "B",
              "language": "Czech",
              "languageShort": "CZ",
              "year": 2021,
              "oneField": false,
              "onlineAppForm": false,
              "onlineAppFormDeadline": "",
              "displayFrom": null,
              "regulation": false,
              "overallCount": 231
            },
            ....
          ],
          "count": 10,
          "total": 231,
          "type": 0,
          "faculty": null,
          "form": null,
          "language": null,
          "name": null
        }
        """
        json = response.json()
        if "fields" not in json or not json["fields"] or json.get("count", 0) == 0:
            return

        # detail
        for item in json["fields"]:
            formdata = self.formdata.copy()
            formdata.update({"maior": str(item["id"]), "year": str(item["year"])})
            if item["globalId"]:
                formdata.update({"id": str(item["globalId"])})
            yield FormRequest(
                self.detail_url, callback=self.parse_detail, formdata=formdata, cb_kwargs={"year": item["year"]}
            )

        # calculate skip parameter for next page
        request_data = parse_qs(response.request.body.decode(), keep_blank_values=True)
        page = int(request_data["skip"][0]) + self.per_page

        # get next page
        formdata = self.formdata.copy()
        formdata["skip"] = str(page)
        yield FormRequest(self.list_url, callback=self.parse, formdata=formdata)

    def parse_detail(self, response, year):
        """
        Example of JSON response for detail:

        {
          "maior": {
            "id": 5369,
            "name": "Anglický jazyk se zaměřením na vzdělávání",
            "faculty": "Pedagogická fakulta",
            "form": "Prezenční",
            "type": "Bakalářské",
            "language": "Český",
            "annotation": "Tento studijní program je koncipován jako bakalářské strukturované studium, které předpokládá pokračování v magisterském studijním programu Učitelství anglického jazyka pro ZŠ. Během studia studenti navštěvují přednášky a semináře lingvistických disciplín, anglické a americké literatury a reálií. Zároveň se studenti ve cvičeních praktického jazyka a jazykových dovedností zdokonalují v angličtině. K tomuto cíli navíc přispívá i fakt, že všechny přednášky a semináře jsou vedeny v angličtině. \nV případě dotazů kontaktujte: blanka.babicka@upol.cz (Mgr. Blanka Babická, Ph.D.)",
            "guarantee": "doc. PhDr. Václav Řeřicha, CSc.",
            "title": "Bc.",
            "medicalFittnes": "Není vyžadována specifická zdravotní způsobilost.",
            "admissionRequirements": "Ke studiu budou přijímáni pouze ti uchazeči, kteří v době zápisu ke studiu (srpen 2021) splní zákonnou podmínku absolutoria předchozího stupně studia (předloží při zápisu ke studiu úředně ověřenou kopii dokladu o absolvování předchozího stupně studia - maturitní vysvědčení). Uchazeč, který nedoloží osvědčení o svém předchozím studiu, nemůže být přijat ke studiu na PdF UP v Olomouci. \nPožadavky přijímací zkoušky:\nPísemná zkouška z anglického jazyka: \nOčekává se, že vstupní jazyková způsobilost uchazečů je na úrovni B2 podle Společného evropského referenčního rámce pro jazyky, což odpovídá vyšší úrovni písemné části státní maturitní zkoušky z angličtiny. Tato způsobilost je ověřována jen písemnou formou komplexního přijímacího testu.Test obsahuje úkoly, které prověřují gramatiku a slovní zásobu v kontextu souvislého textu. Formou dílčích úkolů k neznámému textu je dále prověřována schopnost uchazeče porozumět textu, orientovat se v něm a pochopit z kontextu význam méně známých slov (slovníky nejsou povoleny). Test nezjišťuje teoretické a faktografické znalosti z oblasti literatury a reálií. \n",
            "admissionRequirementsUrl": "http://ucj.upol.cz",
            "educationals": null,
            "absolventProfile": "Absolvent bakalářského studijního programu Anglický jazyk se zaměřením na vzdělávání získá obecné i specifické znalosti v oblasti lingvistiky, anglické a americké literatury a reálií. V praktickém jazyce dosáhnou celkově úrovně C1 podle Společného evropského referenčního rámce pro jazyky. \nPo absolvování bude schopen:\n-\tprokázat kvalitní teoretické znalosti anglické fonetiky, fonologie, morfologie, syntaxe a lexikologie,\n-\tprokázat širokou znalost britské a americké literatury založenou na vlastním studiu a analýze základního penza těchto literatur i na studiu základní sekundární literatury,\n-\tprokázat porozumění základní kulturní a historické znalosti týkající se anglicky mluvících zemí,\n-\tprakticky používat anglický jazyk v komunikaci (produktivně i receptivně) minimálně na úrovni C1.\n",
            "regulatedProfession": "Asistent pedagoga.",
            "profeseAbsolventProfile": null,
            "assumptionOfApplicability": "Kvalifikačně je absolvent připraven k dalšímu studiu v navazujícím magisterském programu Učitelství anglického jazyka pro ZŠ na Pedagogické fakultě Univerzity Palackého v Olomouci či na jiných pedagogických fakultách. Vzhledem k náplni studijního programu se absolvent může uplatnit ve školství, hlavně na prvním a druhém stupni základních škol, jako asistent učitele. Mimo oblast školství se může uplatnit ve sféře podnikatelské či kulturní, např. v cestovních kancelářích, bankách, reklamních a jazykových agenturách nebo administrativě.",
            "possibleJobPositions": "Absolvent programu může působit jako asistent pedagoga.\n",
            "onlineAppForm": true,
            "onlineAppFormDeadline": "15.03.2021",
            "lengthOfStudy": 3,
            "numberOfAccepted": 25,
            "numberOfAcceptedNote": null,
            "oneField": true
          },
          "minor": null,
          "combinationId": null,
          "studyProgramId": 0,
          "globalId": 34053,
          "fieldId": 5369,
          "name": null,
          "onlineAppForm": true,
          "onlineAppFormDeadline": "15.03.2021",
          "round": 1,
          "isced": "Vzdělávání a výchova",
          "fieldOfEducation": "Učitelství"
        }
        """
        json = response.json()

        # major data
        major = ItemLoader(item=CourseItem(), response=response)
        fragment = urlencode({"year": year, "maior": json["maior"]["id"]})
        url = f"{self.public_detail_url}#{fragment}"
        major.add_value("url", url)
        major.add_value("college", "UP")
        major.add_value("timestamp", time.time())

        major.add_value("name", json["maior"]["name"])
        major.add_value("faculty", json["maior"]["faculty"])
        major.add_value("price", None)
        major.add_value("town", None)
        major.add_value("sds", json["maior"]["lengthOfStudy"] * 2)
        major.add_value("form", json["maior"]["form"])
        major.add_value("conditions", json["maior"]["admissionRequirements"])
        major.add_value("term", year)
        major.add_value("notes", json["maior"]["possibleJobPositions"])
        major.add_value("language", json["maior"]["language"])
        major.add_value("code", json["maior"]["id"])
        major.add_value("field", json["isced"])
        if not json["minor"]:
            return major.load_item()

        # minor data
        minor = ItemLoader(item=CourseItem(), response=response)
        fragment = urlencode({"year": year, "globalId": json["globalId"]})
        url = f"{self.public_detail_url}#{fragment}"
        minor.add_value("url", url)
        minor.add_value("college", "UP")
        minor.add_value("timestamp", time.time())
        minor.add_value("name", json["minor"]["name"])
        minor.add_value("faculty", json["minor"]["faculty"])
        minor.add_value("price", None)
        minor.add_value("town", None)
        minor.add_value("sds", json["minor"]["lengthOfStudy"] * 2)
        minor.add_value("form", json["minor"]["form"])
        minor.add_value("conditions", json["minor"]["admissionRequirements"])
        minor.add_value("term", year)
        minor.add_value("notes", json["minor"]["possibleJobPositions"])
        minor.add_value("language", json["minor"]["language"])
        minor.add_value("code", json["minor"]["id"])
        minor.add_value("field", json["isced"])

        return (major.load_item(), minor.load_item())
