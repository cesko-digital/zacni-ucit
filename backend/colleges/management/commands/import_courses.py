from django.core.management.base import BaseCommand, CommandError
import pathlib
import os
from colleges.models import Course, College, Faculty
import json


class Command(BaseCommand):
    help = """Import scraped courses."""

    def add_arguments(self, parser):
        parser.add_argument("path", type=pathlib.Path, help="Path to scraped JSON lines file")

    def handle(self, *args, **options):
        if not os.path.exists(options["path"]):
            raise CommandError('Given path "%s" doesnt exists.' % options["path"])

        if not os.path.isfile(options["path"]):
            raise CommandError('Provided path "%s" is not file.' % options["path"])

        colleges = {}
        faculties = {}
        data = json.load(open(options["path"]))
        for item in data:

            # find college
            k = item['college'][0]
            if k not in colleges:
                qs = College.objects.filter(name=k)
                if qs.exists():
                    colleges[k] = qs.get()
                else:
                    colleges[k] = None
            college = colleges[k]
            if not college:
                self.stderr.write(self.style.ERROR(f"Uknown college {item['college']}"))
                continue

            # find faculty
            k = item['faculty'][0]
            if k not in faculties:
                qs = Faculty.objects.filter(name=k, college=college)
                if qs.exists():
                    faculties[k] = qs.get()
                else:
                    faculties[k] = None
            faculty = faculties[k]
            if not faculty:
                self.stderr.write(self.style.ERROR(f"Uknown faculty {item['faculty']}"))
                continue

            Course.objects.get_or_create(
                name = item['name'],
                faculty = faculty,
                price = 
                sds = int(item['sds']) if item['sds'].isdigit() else 0,
                form_present = 
                form_combined = 
                url = item['url'],
                note = 
            )

        # "name": "Název:",
        # "price": "Výše úplaty:",
        # "town": "Místo konání:",
        # "sds": "Délka programu (v semestrech/krátkodobý):",
        # "form": "Způsob výuky programu:",
        # "conditions": "Podmínky přijímání zájemců:",
        # "term": ("Otevírán v akad. roce:", "Zahájení:"),
        # "notes": "Podmínky absolvování programu:",
        # "language": "Jazyk, v němž je program uskutečňován:",
        # "code": "Číslo akreditace udělené univerzitě/fakultě:",
        # "field": "Studijní obor:",


        # # import vysokych skol
        # colleges = import_msmt_college_registry_xlsx(options["path"], "ExportVS")
        # colleges_lut, colleges_count = self.import_colleges(colleges)
        # if colleges_count:
        #     self.stdout.write(self.style.SUCCESS("Successfully imported %s colleges" % colleges_count))
        # else:
        #     self.stdout.write(self.style.SUCCESS("No new college was imported"))

        # # import fakult
        # faculties = import_msmt_college_registry_xlsx(options["path"], "ExportFakulty")
        # faculties_count = self.import_faculties(faculties, colleges_lut)
        # if faculties_count:
        #     self.stdout.write(self.style.SUCCESS("Successfully imported %s faculties" % faculties_count))
        # else:
        #     self.stdout.write(self.style.SUCCESS("No new faculty was imported"))
