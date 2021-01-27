from django.core.management.base import BaseCommand, CommandError
import pathlib
import os
from colleges.utils import import_msmt_college_registry_xlsx
from colleges.models import College, Faculty
import hashlib
from django.db.utils import IntegrityError


class Command(BaseCommand):
    help = """Import XLSX sheetu z adresy https://regvssp.msmt.cz/registrvssp/cvslist.aspx.

Na uvedene adrese se nachazi "REGISTR VYSOKÝCH ŠKOL a uskutečňovaných studijních programů".
Je treba kliknout na "Export XLSX" a tento soubor naimportovat (CSV export je spatne naformatovany
a kvuli neosetrenym znakum pro novy radek se spatne importuje).

V XLSX jsou 2 sheety: "ExportVS" se seznamem vyskoych skol v CR a "ExportFakulty" se seznamem
vsech fakult na uvedenych skolach. Oba zdroje se rozparsuji a nactou do aplikace colleges."""

    def add_arguments(self, parser):
        parser.add_argument("path", type=pathlib.Path, help="Cesta k XLSX souboru")

    def import_colleges(self, colleges):
        """
        Zpracuje data z sheetu "ExportVS".

        NOTE: Atribut College.code je generovan automaticky jako hash ze jmena vysoke skoly,
        protoze v databazi musi mit unikatni hodnotu.
        V sheetu z MSMT se zkratky nevyskytuji, proto musi byt pozdeji naimportovany dataset
        aktualizovan nejakym clovekem (tj. napr. pro Univerzitu Karlovu doplnit UK, apod).
        """
        out = {}
        count = 0

        for college in colleges:
            if college["typ_VS"].strip() == "univerzitní":
                type_ = College.TYPE_UNIVERSITY
            else:
                type_ = College.TYPE_NON_UNIVERSITY

            if college["text_forma_VS"].strip() == "soukromá":
                form = College.FORM_PRIVATE
            elif college["text_forma_VS"].strip() == "veřejná":
                form = College.FORM_PUBLIC
            else:
                form = College.FORM_GOV

            url = college["web"].strip()
            if not url.startswith("http"):
                url = f"http://{url}"

            code = hashlib.sha1(college["nazev_cz"].strip().encode()).hexdigest()[:8]

            c, created = College.objects.get_or_create(
                name=college["nazev_cz"].strip(),
                type=type_,
                form=form,
                address=college["sidlo"].strip(),
                rid=college["rid"].strip(),
                ic=college["ic"].strip(),
                databox=college["datova_schranka"].strip(),
                url=url,
                code=code,
            )
            out[c.rid] = c
            if created:
                count += 1

        return out, count

    def import_faculties(self, faculties, colleges_lut):
        """
        Zpracuje data z sheetu "ExportFakulty".

        NOTE: duplicitni zaznamy se do databaze neimportuji; v dobe implementace (konec ledna 2021) se v oficialnich
        datech objevuje duplicita pro "Farmaceutická fakulta / Masarykova univerzita".
        """
        count = 0

        for faculty in faculties:
            url = faculty["web"].strip()
            if not url.startswith("http"):
                url = f"http://{url}"

            if faculty["rid"].strip() not in colleges_lut:
                self.stderr.write(
                    self.style.ERROR(
                        'Unknown college RID "%s" for "%s" faculty'
                        % (faculty["rid"].strip(), faculty["nazev_cz"].strip())
                    )
                )
                continue

            try:
                f, created = Faculty.objects.get_or_create(
                    name=faculty["nazev_cz"].strip(),
                    rid=faculty["rid_f"].strip(),
                    college=colleges_lut[faculty["rid"].strip()],
                    url=url,
                )
            except IntegrityError:
                self.stderr.write(
                    self.style.ERROR(
                        'Duplicate record: "%s" faculty ("%s" RID)'
                        % (faculty["nazev_cz"].strip(), faculty["rid"].strip())
                    )
                )
                continue

            if created:
                count += 1

        return count

    def handle(self, *args, **options):
        if not os.path.exists(options["path"]):
            raise CommandError('Given path "%s" doesnt exists.' % options["path"])

        if not os.path.isfile(options["path"]):
            raise CommandError('Provided path "%s" is not file.' % options["path"])

        # import vysokych skol
        colleges = import_msmt_college_registry_xlsx(options["path"], "ExportVS")
        colleges_lut, colleges_count = self.import_colleges(colleges)
        if colleges_count:
            self.stdout.write(self.style.SUCCESS("Successfully imported %s colleges" % colleges_count))
        else:
            self.stdout.write(self.style.SUCCESS("No new college was imported"))

        # import fakult
        faculties = import_msmt_college_registry_xlsx(options["path"], "ExportFakulty")
        faculties_count = self.import_faculties(faculties, colleges_lut)
        if faculties_count:
            self.stdout.write(self.style.SUCCESS("Successfully imported %s faculties" % faculties_count))
        else:
            self.stdout.write(self.style.SUCCESS("No new faculty was imported"))
