from django.db import models
from django_extensions.db.models import TimeStampedModel


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


class SchoolLevel(TimeStampedModel):
    """
    Stupen skoly.
    """

    name = models.CharField("Název", max_length=100, unique=True)

    class Meta:
        verbose_name = "Stupeň školy"
        verbose_name_plural = "Stupně škol"
        ordering = ("name",)

    def __str__(self):
        return self.name


class SchoolType(TimeStampedModel):
    """
    Typ skoly.
    """

    name = models.CharField("Název", max_length=100, unique=True)

    class Meta:
        verbose_name = "Typ školy"
        verbose_name_plural = "Typy škol"
        ordering = ("name",)

    def __str__(self):
        return self.name


class SubjectGroup(TimeStampedModel):
    """
    Predmetova skupina.
    """

    name = models.CharField("Název", max_length=100, unique=True)
    subjects = models.ManyToManyField(Subject, verbose_name="Předměty")

    class Meta:
        verbose_name = "Předmětová skupina"
        verbose_name_plural = "Předmětové skupiny"
        ordering = ("name",)

    def __str__(self):
        return self.name
