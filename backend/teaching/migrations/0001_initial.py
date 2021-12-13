# Generated by Django 3.0.2 on 2021-12-01 16:04

from django.db import migrations, models
import django.db.models.deletion
import django_extensions.db.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SchoolType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('name', models.CharField(max_length=100, unique=True, verbose_name='Název')),
            ],
            options={
                'verbose_name': 'Typ školy',
                'verbose_name_plural': 'Typy škol',
                'ordering': ('name',),
            },
        ),
        migrations.CreateModel(
            name='SubjectGroup',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('name', models.CharField(max_length=100, unique=True, verbose_name='Název')),
            ],
            options={
                'verbose_name': 'Předmětová skupina',
                'verbose_name_plural': 'Předmětové skupiny',
                'ordering': ('name',),
            },
        ),
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('name', models.CharField(max_length=100, verbose_name='Název předmětu')),
                ('code', models.CharField(max_length=20, unique=True, verbose_name='Zkratka')),
                ('subject_group', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='teaching.SubjectGroup', verbose_name='Předmětová skupina')),
            ],
            options={
                'verbose_name': 'Vzdělávací oblast podle RVP',
                'verbose_name_plural': 'Vzdělávací oblasti podle RVP',
                'ordering': ('name',),
            },
        ),
        migrations.CreateModel(
            name='SchoolSubType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('name', models.CharField(max_length=100, unique=True, verbose_name='Název')),
                ('type', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='teaching.SchoolType', verbose_name='Typ školy')),
            ],
            options={
                'verbose_name': 'Podtyp školy',
                'verbose_name_plural': 'Podtypy škol',
                'ordering': ('name',),
            },
        ),
        migrations.CreateModel(
            name='SchoolLevel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('name', models.CharField(max_length=100, unique=True, verbose_name='Název')),
                ('target_school_level', models.BooleanField(default=True, help_text='Kde chce uživatel učit')),
                ('user_education', models.BooleanField(default=True, help_text='Dosažené vzdělání')),
                ('subjects', models.ManyToManyField(related_name='school_levels', to='teaching.Subject', verbose_name='Předměty')),
            ],
            options={
                'verbose_name': 'Stupeň školy',
                'verbose_name_plural': 'Stupně škol',
                'ordering': ('name',),
            },
        ),
    ]
