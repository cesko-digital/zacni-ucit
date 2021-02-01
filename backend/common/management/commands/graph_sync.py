from django.core.management.base import BaseCommand, CommandError
from django.db.utils import IntegrityError
from common.models import GraphModel
from django.apps import apps


class Command(BaseCommand):
    help = "Save current objects from relational DB to graph DB."

    def add_arguments(self, parser):
        parser.add_argument("model", type=str, help="Model specification in form 'app.model'", nargs="*")

    def handle(self, *args, **options):
        for app in [i for i in options['model'] if '.' in i]:
            app_name, model_name = app.split('.', 1)
            try:
                model = apps.get_model(app_name, model_name)
            except LookupError:
                self.stderr.write(self.style.ERROR(f"Provided model {app} doesn't exists"))
                continue

            if not issubclass(model, GraphModel):
                self.stderr.write(self.style.ERROR(f"Provided model {app} can't be synced to graph DB"))
                continue

            for obj in model.objects.all():
                obj.graph_save()
            self.stdout.write(self.style.SUCCESS(f"Model {app} succesfully synced to graph DB"))
