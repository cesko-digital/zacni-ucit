# Generated by Django 3.1.5 on 2021-01-25 08:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('colleges', '0002_auto_20210125_0915'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='faculty',
            unique_together={('name', 'college', 'town')},
        ),
    ]