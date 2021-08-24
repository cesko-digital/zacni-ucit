# Generated by Django 3.2.5 on 2021-08-22 10:36

from django.db import migrations, models
import django.db.models.deletion
import django_extensions.db.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('teaching', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CollegeArea',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('name', models.CharField(max_length=100, unique=True, verbose_name='Název oblasti')),
            ],
            options={
                'verbose_name': 'Oblast VŠ vzdělávání',
                'verbose_name_plural': 'Oblasti VŠ vzdělávání',
                'ordering': ('name',),
            },
        ),
        migrations.CreateModel(
            name='EducationArea',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('name', models.CharField(max_length=512, unique=True, verbose_name='Název')),
            ],
            options={
                'verbose_name': 'Oblast VŠ vzdělávání 2',
                'verbose_name_plural': 'Oblasti VŠ vzdělávání 2',
                'ordering': ('name',),
            },
        ),
        migrations.CreateModel(
            name='EducationType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('qualification_type', models.CharField(choices=[('titul', 'Titul'), ('czv', 'Kurz CŽV'), ('dalsi', 'Další zkušenost')], max_length=20, verbose_name='Typ kvalifikace')),
                ('name', models.CharField(max_length=200, null=True, verbose_name='Název')),
                ('character', models.CharField(max_length=100, null=True, verbose_name='Charakter')),
                ('area', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='qualifications.educationarea', verbose_name='Oblast VŠ vzdělávání')),
                ('school_levels', models.ManyToManyField(related_name='education_types', to='teaching.SchoolLevel', verbose_name='Stupeň školy')),
            ],
            options={
                'verbose_name': 'Typ vzdělání z hlediska zákona',
                'verbose_name_plural': 'Typ vzdělání z hlediska zákona',
                'ordering': ('qualification_type',),
            },
        ),
        migrations.CreateModel(
            name='OtherExperience',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('name', models.CharField(max_length=100, verbose_name='Název')),
            ],
            options={
                'verbose_name': 'Další možnost',
                'verbose_name_plural': 'Další možnosti',
                'ordering': ('name',),
            },
        ),
        migrations.CreateModel(
            name='PreparationType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('name', models.CharField(max_length=200, unique=True, verbose_name='Název')),
            ],
            options={
                'verbose_name': 'Typ předmětů',
                'verbose_name_plural': 'Typy předmětů',
                'ordering': ('name',),
            },
        ),
        migrations.CreateModel(
            name='SubjectType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('name', models.CharField(max_length=512, unique=True, verbose_name='Název')),
            ],
            options={
                'verbose_name': 'Titul',
                'verbose_name_plural': 'Tituly',
                'ordering': ('name',),
            },
        ),
        migrations.CreateModel(
            name='Title',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('name', models.CharField(max_length=100, verbose_name='Název')),
                ('code', models.CharField(max_length=20, unique=True, verbose_name='Zkratka')),
                ('visible_in_form', models.BooleanField(default=True)),
            ],
            options={
                'verbose_name': 'Kvalifikace',
                'verbose_name_plural': 'Kvalifikace',
                'ordering': ('name', 'code'),
            },
        ),
        migrations.CreateModel(
            name='Qualification',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('legal_paragraph', models.CharField(max_length=400, unique=True, verbose_name='Paragraf zákona')),
                ('example', models.CharField(max_length=400, unique=True, verbose_name='Paragraf zákona')),
                ('row_id', models.SmallIntegerField()),
                ('note', models.TextField(null=True, verbose_name='Poznámka')),
                ('education_types', models.ManyToManyField(help_text='Typ vzdělání z hlediska zákona', to='qualifications.EducationType', verbose_name='Typ vzdělání z hlediska zákona')),
                ('school_level', models.ForeignKey(default='', on_delete=django.db.models.deletion.SET_DEFAULT, to='teaching.schoollevel', verbose_name='Stupeň školy')),
                ('subject_group', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='teaching.subjectgroup', verbose_name='Předmětové skupiny')),
                ('subject_type', models.ForeignKey(default='', on_delete=django.db.models.deletion.SET_DEFAULT, to='qualifications.subjecttype', verbose_name='Typ předmětů')),
            ],
            options={
                'get_latest_by': 'modified',
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='educationtype',
            name='subject_type',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='qualifications.subjecttype', verbose_name='Typ předmětů'),
        ),
        migrations.AddField(
            model_name='educationtype',
            name='title',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='qualifications.title', verbose_name='Titul'),
        ),
        migrations.CreateModel(
            name='CollegeProgramme',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('name', models.CharField(max_length=100, verbose_name='Studijní program')),
                ('area', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='qualifications.collegearea', verbose_name='Oblast VŠ vzdělávání')),
                ('subjects', models.ManyToManyField(help_text='Co můžeš učit na 2.stupni ZŠ nebo na SŠ.', to='teaching.Subject', verbose_name='Vzdělávací oblast podle RVP')),
            ],
            options={
                'verbose_name': 'Typický VŠ studijní program',
                'verbose_name_plural': 'Typické VŠ studijní programy',
                'ordering': ('area', 'name'),
                'unique_together': {('area', 'name')},
            },
        ),
    ]
