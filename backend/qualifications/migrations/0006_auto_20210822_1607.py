# Generated by Django 3.1.5 on 2021-08-22 14:07

from django.db import migrations, models
import django.db.models.deletion
import django_extensions.db.fields


class Migration(migrations.Migration):

    dependencies = [
        ('teaching', '0003_schoolsubtype'),
        ('qualifications', '0005_auto_20210822_1556'),
    ]

    operations = [
        
        migrations.CreateModel(
            name='Qualification',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('legal_paragraph', models.CharField(max_length=400, unique=True, verbose_name='Paragraf zákona')),
                ('example', models.CharField(max_length=400, unique=True, verbose_name='Příklad')),
                ('row_id', models.SmallIntegerField()),
                ('note', models.TextField(null=True, verbose_name='Poznámka')),
                ('education_types', models.ManyToManyField(help_text='Typ vzdělání z hlediska zákona', to='qualifications.EducationType', verbose_name='Typ vzdělání z hlediska zákona')),
                ('school_level', models.ForeignKey(default='', on_delete=django.db.models.deletion.SET_DEFAULT, to='teaching.schoollevel', verbose_name='Stupeň školy')),
                ('subject_group', models.ForeignKey(default='', on_delete=django.db.models.deletion.SET_DEFAULT, to='teaching.subjectgroup', verbose_name='Skupina předmětů')),
            ],
            options={
                'verbose_name': 'Kvalifikace',
                'verbose_name_plural': 'Kvalifikace',
                'ordering': ('row_id',),
            },
        ),
    ]
