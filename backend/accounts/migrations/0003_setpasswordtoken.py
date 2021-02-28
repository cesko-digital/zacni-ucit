# Generated by Django 3.1.5 on 2021-02-27 12:48

from django.db import migrations, models
import django_extensions.db.fields


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_auto_20210221_1943'),
    ]

    operations = [
        migrations.CreateModel(
            name='SetPasswordToken',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('token', models.CharField(max_length=256, verbose_name='Token pro registraci')),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='Email')),
            ],
            options={
                'get_latest_by': 'modified',
                'abstract': False,
            },
        ),
    ]
