# Generated by Django 3.1.5 on 2021-09-28 14:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('teaching', '0005_merge_20210928_1611'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='subjectgroup',
            name='subjects',
        ),
        migrations.AddField(
            model_name='subject',
            name='subject_group',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='teaching.subjectgroup', verbose_name='Předmětová skupina'),
        ),
    ]
