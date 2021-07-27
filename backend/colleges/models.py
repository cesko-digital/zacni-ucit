from django.db import models
from django_extensions.db.models import TimeStampedModel


class College(TimeStampedModel):
    """
    Vysoka skola.
    Jazyková škola.
    """

    TYPE_UNIVERSITY = "univerzitni"
    TYPE_NON_UNIVERSITY = "neuniverzitni"
    TYPE_LANGUAGE_SCHOOL = "jazykova skola"
    TYPE_CHOICES = (
        (TYPE_UNIVERSITY, "univerzitní"),
        (TYPE_NON_UNIVERSITY, "neuniverzitní"),
        (TYPE_LANGUAGE_SCHOOL, "jazyková škola"),
    )

    FORM_PRIVATE = "soukroma"
    FORM_GOV = "statni"
    FORM_PUBLIC = "verejna"
    FORM_CHOICES = ((FORM_PRIVATE, "soukromá"), (FORM_GOV, "státní"), (FORM_PUBLIC, "veřejná"))

    name = models.CharField(help_text="Název školy", max_length=200, unique=True)
    type = models.CharField(help_text="Typ", max_length=20, choices=TYPE_CHOICES)
    form = models.CharField(help_text="Forma", max_length=20, choices=FORM_CHOICES)
    address = models.CharField(help_text="Adresa", max_length=200)
    rid = models.CharField(help_text="RID", max_length=20, unique=True)
    ic = models.CharField(help_text="IČ", max_length=20)
    databox = models.CharField(help_text="Datová schránka", max_length=20)
    url = models.URLField(help_text="URL")
    code = models.CharField(help_text="Zkratka", max_length=30, unique=True)

    class Meta:
        verbose_name = "Vysoká škola"
        verbose_name_plural = "Vysoké školy"
        ordering = ("name",)

    def __str__(self):
        return self.name


class Faculty(TimeStampedModel):
    """
    Fakulta na vysoke skole.
    """

    name = models.CharField(help_text="Název fakulty", max_length=200)
    college = models.ForeignKey("colleges.College", on_delete=models.SET_NULL, null=True)
    rid = models.CharField(help_text="RID", max_length=20)
    url = models.URLField(help_text="URL")

    class Meta:
        verbose_name = "Fakulta vysoké školy"
        verbose_name_plural = "Fakulty vysokých škol"
        ordering = ("name", "college")
        unique_together = ("name", "college")

    def __str__(self):
        return f"{self.name} / {self.college} "


class Course(TimeStampedModel):
    """
    Kurz.

    Zdroj: https://docs.google.com/spreadsheets/d/1_karAzypSkiUOgrp6cm0_PLCimXyzdunxuUbdZKqjvI/edit#gid=0
    """

    qualification_type = models.CharField(help_text="Typ kvalifikace", max_length=150)
    title = models.ForeignKey("qualifications.Title", on_delete=models.SET_NULL, null=True, verbose_name="Titul")
    school_levels = models.ManyToManyField("teaching.SchoolLevel", verbose_name="Stupně škol")
    # education_type = models.ForeignKey(EducationType, on_delete=models.SET_NULL, null=True, verbose_name="Typy vzdělání z hlediska zákona")
    other_qualification_type = models.CharField(help_text="Typ ostatní kvalifikace", max_length=150)
    name = models.CharField(help_text="Název", max_length=300)  # Realny nazev kurzu
    university = models.ForeignKey(College, on_delete=models.SET_NULL, null=True, verbose_name="Vysoká škola")
    faculty = models.ForeignKey(Faculty, on_delete=models.SET_NULL, null=True, verbose_name="Fakulta")
    city = models.CharField(help_text="Město", max_length=350)
    price = models.DecimalField(help_text="Cena", max_digits=8, decimal_places=2)
    study_length_in_semesters = models.IntegerField(help_text="Standardní doba studia")
    form_present = models.BooleanField(help_text="Prezenční forma studia", default=False)
    form_combined = models.BooleanField(help_text="Kombinovaná forma studia", default=True)
    form_distant = models.BooleanField(help_text="Distanční forma studia", default=False)
    double_major = models.BooleanField(help_text="Dvouobor", default=False)
    single_major = models.BooleanField(help_text="Jednoobor", default=True)
    url = models.URLField(help_text="URL na podrobnější informace", max_length=350)
    subjects = models.ManyToManyField("teaching.Subject", verbose_name="Předměty")
    note = models.TextField(help_text="Poznámka", blank=True)

    class Meta:
        verbose_name = "Kurz"
        verbose_name_plural = "Kurzy"
        ordering = ("name", "faculty", "faculty__college")

    def __str__(self):
        return f"{self.name} / {self.faculty}"
