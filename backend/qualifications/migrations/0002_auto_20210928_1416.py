# Generated by Django 3.1.5 on 2021-09-28 12:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teaching', '0004_auto_20210928_1359'),
        ('qualifications', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='qualification',
            name='subject_group',
        ),
        migrations.AddField(
            model_name='qualification',
            name='subject_groups',
            field=models.ManyToManyField(to='teaching.SubjectGroup', verbose_name='Skupina předmětů'),
        ),
    ]
