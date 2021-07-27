from django.db import models
from django_extensions.db.models import TimeStampedModel
from teaching.models import SchoolLevel

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
        CollegeArea,
        on_delete=models.SET_NULL,
        null=True,
        verbose_name="Oblast VŠ vzdělávání",
    )
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


class EducationArea(TimeStampedModel):
    name = models.CharField("Název", max_length=512, unique=True)

    class Meta:
        verbose_name = "Oblast VŠ vzdělávání 2"
        verbose_name_plural = "Oblasti VŠ vzdělávání 2"
        ordering = ("name",)

    def __str__(self):
        return self.name


class SubjectType(TimeStampedModel):
    name = models.CharField("Název", max_length=512, unique=True)

class PreparationType(TimeStampedModel):
    name = models.CharField("Název", max_length=200, unique=True)
    class Meta:
        verbose_name = "Typ předmětů"
        verbose_name_plural = "Typy předmětů"
        ordering = ("name",)

    def __str__(self):
        return self.name



class Title(TimeStampedModel):
    """
    Titul.
    """
    name = models.CharField("Název", max_length=100)
    code = models.CharField("Zkratka", max_length=20, unique=True)

class SubjectType(TimeStampedModel):
    name = models.CharField("Název", max_length=512, unique=True)

    class Meta:
        verbose_name = "Titul"
        verbose_name_plural = "Tituly"
        ordering = ("name",)

    def __str__(self):
        return self.code

class EducationType(TimeStampedModel):
    """
    Typ vzdelani z hlediska zakona.
    """

    TITLE_QUALIFICATION = "titul"
    CZV_QUALIFICATION = "czv"
    OTHER_EXPERIENCE = "dalsi"
    QUALIFICATION_TYPE_CHOICES = (
        (TITLE_QUALIFICATION, "Titul"),
        (CZV_QUALIFICATION, "Kurz CŽV"),
        (OTHER_EXPERIENCE, "Další zkušenost"),
    )
    qualification_type = models.CharField("Typ kvalifikace", max_length=20, choices=QUALIFICATION_TYPE_CHOICES)
    name = models.CharField("Název", max_length=200)  # zákonná formulace
    title = models.ForeignKey(Title, on_delete=models.SET_NULL, null=True, verbose_name="Titul")
    area = models.ForeignKey(EducationArea, on_delete=models.SET_NULL, null=True, verbose_name="Oblast VŠ vzdělávání")
    character = models.CharField("Charakter", max_length=100)
    subject_type = models.ForeignKey(SubjectType, on_delete=models.SET_NULL, null=True, verbose_name="Typ předmětů")
    school_levels = models.ManyToManyField(
        "teaching.SchoolLevel", related_name="education_types", verbose_name="Stupeň školy"
    )

    class Meta:
        verbose_name = "Typ vzdělání z hlediska zákona"
        verbose_name_plural = "Typ vzdělání z hlediska zákona"
        ordering = ("qualification_type",)

    def __str__(self):
        return f"{self.qualification_type} / {self.area} / {self.subject_type}"

class Qualification(TimeStampedModel):
    legal_paragraph = models.CharField("Paragraf zákona", max_length=400, unique=True)
    example = models.CharField("Paragraf zákona", max_length=400, unique=True)
    row_id = models.SmallIntegerField()
    subject_type = models.ForeignKey(SubjectType, default='', on_delete=models.SET_DEFAULT, null=False, verbose_name="Typ předmětů")
    school_level = models.ForeignKey(SchoolLevel, default='', on_delete=models.SET_DEFAULT, null=False, verbose_name="Stupeň školy")
    education_types = models.ManyToManyField(
        EducationType,
        verbose_name="Typ vzdělání z hlediska zákona",
        help_text="Typ vzdělání z hlediska zákona",
    )
    note = models.TextField("Poznámka", null=True)

class Title(TimeStampedModel):
    """
    Titul.
    """

    name = models.CharField("Název", max_length=100)
    code = models.CharField("Zkratka", max_length=20, unique=True)
    class Meta:
        verbose_name = "Kvalifikace"
        verbose_name_plural = "Kvalifikace"
        ordering = ("name", "code")

    def __str__(self):
        return self.name


class OtherExperience(TimeStampedModel):
    """
    Dalsi moznosti krome TITULu nebo Kurzu CZV.

    https://miro.com/app/board/o9J_lby_RpM=/?moveToWidget=3074457353767573317&cot=14
    """

    name = models.CharField("Název", max_length=100)

    class Meta:
        verbose_name = "Další možnost"
        verbose_name_plural = "Další možnosti"
        ordering = ("name",)

    def __str__(self):
        return self.name
