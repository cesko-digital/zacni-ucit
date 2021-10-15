# Generated by Django 3.1.5 on 2021-09-21 10:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('teaching', '0003_auto_20210921_1210'),
        ('qualifications', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='qualification',
            name='subject_group',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='teaching.subjectgroup', verbose_name='Předmětové skupiny'),
        ),
    ]
