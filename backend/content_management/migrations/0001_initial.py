# Generated by Django 3.0.2 on 2021-12-01 16:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='WebSiteText',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('page_id', models.CharField(max_length=255)),
                ('text_element_id', models.CharField(max_length=255)),
                ('text', models.TextField()),
            ],
        ),
    ]
