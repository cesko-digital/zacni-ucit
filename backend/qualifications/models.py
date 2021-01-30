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
    area = models.ForeignKey(CollegeArea, on_delete=models.SET_NULL, null=True, verbose_name="Oblast VŠ vzdělávání")
    subjects = models.ManyToManyField(
        "teaching.Subject",
        verbose_name="Vzdělávací oblast podle RVP",
        help_text="Co můžeš učit na 2.stupni ZŠ nebo na SŠ.",
    )

    class Meta:
        verbose_name = "Typický VŠ studijní program"
        verbose_name_plural = "Typické VŠ studijní programy"
        ordering = ("area", "name")
        unique_together = ("area", "name")

    def __str__(self):
        return self.name


class EducationType(TimeStampedModel):
    """
    Typ vzdelani z hlediska zakona.
    """

    TITLE_QUALIFICATION = "titul"
    CZV_QUALIFICATION = "czv"
    OTHER_QUALIFICATION = "dalsi"
    QUALIFICATION_CHOICES = (
        (TITLE_QUALIFICATION, "Titul"),
        (CZV_QUALIFICATION, "Kurz CŽV"),
        (OTHER_QUALIFICATION, "Další možnosti"),
    )

    qualification = models.CharField("Možnosti získání kvalifikace", max_length=20, choices=QUALIFICATION_CHOICES)
    education = models.CharField("Typ vzdělání z hlediska zákona", max_length=200)

    class Meta:
        verbose_name = "Typ vzdělání z hlediska zákona"
        verbose_name_plural = "Typ vzdělání z hlediska zákona"
        ordering = ("education",)
        unique_together = ("qualification", "education")

    def __str__(self):
        return f"{self.qualification} / {self.education}"


class Title(TimeStampedModel):
    """
    Titul.
    """

    name = models.CharField("Název", max_length=100)
    shortcut = models.CharField("Zkratka", max_length=20, unique=True)

    class Meta:
        verbose_name = "Titul"
        verbose_name_plural = "Tituly"
        ordering = ("name",)

    def __str__(self):
        return self.shortcut
