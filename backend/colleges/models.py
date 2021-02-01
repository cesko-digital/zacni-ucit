from django.conf import settings
from django.db import models
from django_extensions.db.models import TimeStampedModel

from common.models import GraphModel


class College(TimeStampedModel, GraphModel):
    """
    Vysoka skola.
    """

    TYPE_UNIVERSITY = "univerzitni"
    TYPE_NON_UNIVERSITY = "neuniverzitni"
    TYPE_CHOICES = ((TYPE_UNIVERSITY, "univerzitní"), (TYPE_NON_UNIVERSITY, "neuniverzitní"))

    FORM_PRIVATE = "soukroma"
    FORM_GOV = "statni"
    FORM_PUBLIC = "verejna"
    FORM_CHOICES = ((FORM_PRIVATE, "soukromá"), (FORM_GOV, "státní"), (FORM_PUBLIC, "veřejná"))

    name = models.CharField("Název školy", max_length=200, unique=True)
    type = models.CharField("Typ", max_length=20, choices=TYPE_CHOICES)
    form = models.CharField("Forma", max_length=20, choices=FORM_CHOICES)
    address = models.CharField("Adresa", max_length=200)
    rid = models.CharField("RID", max_length=20, unique=True)
    ic = models.CharField("IČ", max_length=20)
    databox = models.CharField("Datová schránka", max_length=20)
    url = models.URLField("URL")
    code = models.CharField("Zkratka", max_length=30, unique=True)

    class Meta:
        verbose_name = "Vysoká škola"
        verbose_name_plural = "Vysoké školy"
        ordering = ("name",)

    def __str__(self):
        return self.name

    def graph_data(self):
        return {
            'name': self.name,
            'type': self.type,
            'form': self.form,
            'address': self.address,
            'rid': self.rid,
            'ic': self.ic,
            'databox': self.databox,
            'url': self.url,
            'code': self.code,
        }


class Faculty(TimeStampedModel, GraphModel):
    """
    Fakulta na vysoke skole.
    """

    name = models.CharField("Název fakulty", max_length=200)
    town = models.CharField("Město", max_length=50, default="")
    college = models.ForeignKey("colleges.College", on_delete=models.SET_NULL, null=True)
    rid = models.CharField("RID", max_length=20)
    url = models.URLField("URL")

    class Meta:
        verbose_name = "Fakulta vysoké školy"
        verbose_name_plural = "Fakulty vysokých škol"
        ordering = ("name", "college")
        unique_together = ("name", "college")

    def __str__(self):
        return f"{self.name} / {self.college} "

    def graph_data(self):
        return {
            'name': self.name,
            'rid': self.rid,
            'url': self.url,
        }

    def related_graph_data(self):
        return [
            # Faculty - BELONGS_TO -> College
            ("-", "BELONGS_TO", "->", 'college')
        ]


class Course(TimeStampedModel):
    """
    Kurz.

    Zdroj: https://docs.google.com/spreadsheets/d/1_karAzypSkiUOgrp6cm0_PLCimXyzdunxuUbdZKqjvI/edit#gid=0
    """

    name = models.CharField("Název", max_length=300)
    faculty = models.ForeignKey(Faculty, on_delete=models.SET_NULL, null=True, verbose_name="Fakulta")
    price = models.IntegerField("Cena")
    sds = models.IntegerField("Standardní doba studia")
    form_present = models.BooleanField("Prezenční forma studia", default=False)
    form_combined = models.BooleanField("Kombinovaná forma studia", default=True)
    url = models.URLField("URL na podrobnější informace")
    subjects = models.ManyToManyField("teaching.Subject", verbose_name="Předměty")
    note = models.TextField("Poznámka", blank=True)

    class Meta:
        verbose_name = "Kurz"
        verbose_name_plural = "Kurzy"
        ordering = ("name", "faculty", "faculty__college")

    def __str__(self):
        return f"{self.name} / {self.faculty}"
