# Generated by Django 3.1.5 on 2021-09-20 13:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('teaching', '0002_auto_20210822_1943'),
        ('qualifications', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='qualification',
            name='subject_group',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='teaching.subjectgroup', verbose_name='Předmětové skupiny'),
        ),
    ]
