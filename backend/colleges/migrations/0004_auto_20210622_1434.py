# Generated by Django 3.1.5 on 2021-06-22 12:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('qualifications', '0005_otheroption'),
        ('colleges', '0003_auto_20210622_0931'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='title',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='qualifications.title', verbose_name='Titul'),
        ),
    ]
