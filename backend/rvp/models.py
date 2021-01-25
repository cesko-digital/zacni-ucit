from django.db import models
from django_extensions.db.models import TimeStampedModel
from colleges.models import Faculty


class Subject(TimeStampedModel):
    """
    Skolni predmet.

    Zdroj: https://docs.google.com/spreadsheets/d/1msJu1AX_-wYLbhvz8rqsZxFMBwX7-xzghCAFHeeBQEI/edit#gid=2008534637.
    """

    name = models.CharField("Název předmětu", max_length=100)
    code = models.CharField("Zkratka", max_length=20, unique=True)

    class Meta:
        verbose_name = "Vzdělávací oblast podle RVP"
        verbose_name_plural = "Vzdělávací oblasti podle RVP"
        ordering = ("name",)

    def __str__(self):
        return self.code


class Course(TimeStampedModel):
    """
    Kurz.

    Zdroj: https://docs.google.com/spreadsheets/d/1_karAzypSkiUOgrp6cm0_PLCimXyzdunxuUbdZKqjvI/edit#gid=0
    """

    name = models.CharField("Název", max_length=300)
    faculty = models.ForeignKey("colleges.Faculty", on_delete=models.SET_NULL, null=True, verbose_name="Fakulta")
    price = models.IntegerField("Cena")
    sds = models.IntegerField("Standardní doba studia")
    form_present = models.BooleanField("Prezenční forma studia", default=False)
    form_combined = models.BooleanField("Kombinovaná forma studia", default=True)
    url = models.URLField("URL na podrobnější informace")
    subjects = models.ManyToManyField("rvp.Subject", verbose_name="Předměty")
    note = models.TextField("Poznámka", blank=True)

    class Meta:
        verbose_name = "Kurz"
        verbose_name_plural = "Kurzy"
        ordering = ("name", "faculty", "faculty__college")

    def __str__(self):
        return f"{self.name} / {self.faculty}"
