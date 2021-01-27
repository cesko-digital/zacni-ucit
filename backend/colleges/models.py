from django.db import models
from django_extensions.db.models import TimeStampedModel


class College(TimeStampedModel):
    """
    Vysoka skola.
    """

    code = models.CharField("Zkratka", max_length=30, unique=True)

    class Meta:
        verbose_name = "Vysoká škola"
        verbose_name_plural = "Vysoké školy"
        ordering = ("code",)

    def __str__(self):
        return self.code


class Faculty(TimeStampedModel):
    """
    Fakulta na vysoke skole.
    """

    name = models.CharField("Název fakulty", max_length=200)
    town = models.CharField("Město", max_length=50)
    college = models.ForeignKey("colleges.College", on_delete=models.SET_NULL, null=True)

    class Meta:
        verbose_name = "Fakulta vysoké školy"
        verbose_name_plural = "Fakulty vysokých škol"
        ordering = ("name", "college")
        unique_together = ("name", "college", "town")

    def __str__(self):
        return f"{self.name} / {self.college} "
