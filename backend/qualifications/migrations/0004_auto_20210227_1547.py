# Generated by Django 3.1.5 on 2021-02-27 14:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teaching', '0003_schoolsubtype'),
        ('qualifications', '0003_auto_20210227_1448'),
    ]

    operations = [
        migrations.AlterField(
            model_name='educationtype',
            name='school_levels',
            field=models.ManyToManyField(related_name='education_types', to='teaching.SchoolLevel', verbose_name='Stupeň školy'),
        ),
    ]
