from django.core.management import BaseCommand
from app.orm.models import SchoolLevel, SubjectCategory
from faker import Faker

fake = Faker()


class Command(BaseCommand):
    help = 'Custom command for creating sample data'

    def handle(self, *args, **options):
        print('Loading sample data started...')

        for i in range(0, 10):
            SchoolLevel.objects.create(name=fake.name(), description=fake.paragraph(nb_sentences=3))

        for i in range(0, 10):
            SubjectCategory.objects.create(name=fake.name(), description=fake.paragraph(nb_sentences=3))

        print('Loading sample data finished...')
