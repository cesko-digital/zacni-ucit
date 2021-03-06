# Generated by Django 3.1.5 on 2021-02-23 07:05

import common.models
from django.db import migrations, models
import django.db.models.deletion
import django_extensions.db.fields


class Migration(migrations.Migration):

    dependencies = [
        ('teaching', '0002_schoollevel_subjects'),
    ]

    operations = [
        migrations.CreateModel(
            name='SchoolSubType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('name', models.CharField(max_length=100, unique=True, verbose_name='Název')),
                ('type', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='teaching.schooltype', verbose_name='Typ školy')),
            ],
            options={
                'verbose_name': 'Podtyp školy',
                'verbose_name_plural': 'Podtypy škol',
                'ordering': ('name',),
            },
            bases=(models.Model, common.models.GraphModel),
        ),
    ]
