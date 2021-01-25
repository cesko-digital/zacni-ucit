from django.db import models
from django_extensions.db.models import TimeStampedModel


class CollegeArea(TimeStampedModel):
    name = models.CharField("Název oblasti", max_length=100, unique=True)

    class Meta:
        verbose_name = "Oblast VŠ vzdělávání"
        verbose_name_plural = "Oblasti VŠ vzdělávání"
        ordering = ("name",)

    def __str__(self):
        return self.name


class CollegeProgramme(TimeStampedModel):
    """
    Zdroj: https://docs.google.com/spreadsheets/d/1msJu1AX_-wYLbhvz8rqsZxFMBwX7-xzghCAFHeeBQEI/edit#gid=0
    """

    name = models.CharField("Studijní program", max_length=100)
    area = models.ForeignKey(
        "maps.CollegeArea", on_delete=models.SET_NULL, null=True, verbose_name="Oblast VŠ vzdělávání"
    )
    subjects = models.ManyToManyField(
        "rvp.Subject", verbose_name="Vzdělávací oblast podle RVP", help_text="Co můžeš učit na 2.stupni ZŠ nebo na SŠ."
    )

    class Meta:
        verbose_name = "Typický VŠ studijní program"
        verbose_name_plural = "Typické VŠ studijní programy"
        ordering = ("area", "name")
        unique_together = ("area", "name")

    def __str__(self):
        return self.name
