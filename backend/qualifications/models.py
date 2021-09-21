from django.db import models
from django_extensions.db.models import TimeStampedModel
from teaching.models import SchoolLevel, SubjectGroup


class Title(TimeStampedModel):
    """
    Titul.
    """

    name = models.CharField("Název", max_length=100)
    code = models.CharField("Zkratka", max_length=20, unique=True)
    visible_in_form = models.BooleanField(default=True)

    class Meta:
        verbose_name = "Titul"
        verbose_name_plural = "Tituly"
        ordering = ("name", "code")

    def __str__(self):
        return self.name


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


class EducationSpecialization(TimeStampedModel):
    name = models.CharField("Název", max_length=512, unique=True)

    class Meta:
        verbose_name = "Specializace"
        verbose_name_plural = "Specializace"
        ordering = ("name",)

    def __str__(self):
        return self.name


class PreparationType(TimeStampedModel):
    name = models.CharField("Název", max_length=200, unique=True)

    class Meta:
        verbose_name = "Typ předmětů"
        verbose_name_plural = "Typy předmětů"
        ordering = ("name",)

    def __str__(self):
        return self.name


class SubjectType(TimeStampedModel):
    name = models.CharField("Název", max_length=512, unique=True)

    class Meta:
        verbose_name = "Typ předmětů"
        verbose_name_plural = "Typy předmětů"
        ordering = ("name",)

    def __str__(self):
        return self.name


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
    name = models.CharField("Název", max_length=200, null=True)  # zákonná formulace
    title = models.ForeignKey(Title, on_delete=models.SET_NULL, null=True, verbose_name="Titul")
    specialization = models.ForeignKey(
        EducationSpecialization, on_delete=models.SET_NULL, null=True, verbose_name="Oblast VŠ vzdělávání"
    )
    subject_group = models.ForeignKey(
        SubjectGroup, on_delete=models.SET_NULL, null=True, verbose_name="Skupina předmětů"
    )
    school_levels = models.ManyToManyField(
        "teaching.SchoolLevel", related_name="education_types", verbose_name="Stupeň školy"
    )

    class Meta:
        verbose_name = "Typ vzdělání z hlediska zákona"
        verbose_name_plural = "Typ vzdělání z hlediska zákona"
        ordering = ("qualification_type",)

    def __str__(self):
        return f"{self.qualification_type} / {self.specialization} / {self.subject_group}"


class Qualification(TimeStampedModel):
    legal_paragraph = models.CharField("Paragraf zákona", max_length=400)
    example = models.CharField("Příklad", max_length=1000)
    row_id = models.SmallIntegerField(unique=True)
    subject_group = models.ForeignKey(
        SubjectGroup, default="", on_delete=models.SET_DEFAULT, null=False, verbose_name="Skupina předmětů"
    )
    subject_group = models.ForeignKey(
        SubjectGroup, on_delete=models.SET_NULL, null=True, verbose_name="Předmětové skupiny"
    )
    school_level = models.ForeignKey(
        SchoolLevel, default="", on_delete=models.SET_DEFAULT, null=False, verbose_name="Stupeň školy"
    )
    education_types = models.ManyToManyField(
        EducationType,
        verbose_name="Typ vzdělání z hlediska zákona",
        help_text="Typ vzdělání z hlediska zákona",
    )
    note = models.TextField("Poznámka", null=True)

    class Meta:
        verbose_name = "Kvalifikace"
        verbose_name_plural = "Kvalifikace"
        ordering = ("row_id",)

    def __str__(self):
        return str(self.id)
      

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
