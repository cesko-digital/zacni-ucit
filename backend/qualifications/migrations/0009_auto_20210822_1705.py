# Generated by Django 3.1.5 on 2021-08-22 15:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('qualifications', '0008_auto_20210822_1703'),
    ]

    operations = [
        
        migrations.AlterField(
            model_name='qualification',
            name='example',
            field=models.CharField(max_length=700, verbose_name='Příklad'),
        ),
        migrations.AlterField(
            model_name='qualification',
            name='legal_paragraph',
            field=models.CharField(max_length=400, verbose_name='Paragraf zákona'),
        ),
        migrations.AlterField(
            model_name='qualification',
            name='row_id',
            field=models.SmallIntegerField(unique=True),
        ),
    ]