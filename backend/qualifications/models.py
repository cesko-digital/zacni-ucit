from django.db import models
from django.utils.html import mark_safe
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


class QualificationType(TimeStampedModel):
    name = models.CharField("Název", max_length=100, unique=True)

    class Meta:
        verbose_name = "Typ kvalifikace"
        verbose_name_plural = "Typy kvalifikací"
        ordering = ("name",)

    def __str__(self):
        return self.name


class EducationType(TimeStampedModel):
    """
    Typ vzdelani z hlediska zakona.
    """

    qualification_type = models.ForeignKey(
        QualificationType, on_delete=models.SET_NULL, null=True, verbose_name="Typ kvalifikace"
    )
    name = models.CharField("Název", max_length=200, null=True)  # zákonná formulace
    title = models.ForeignKey(Title, on_delete=models.SET_NULL, null=True, verbose_name="Titul")
    specializations = models.ManyToManyField(EducationSpecialization, verbose_name="Oblast VŠ vzdělávání")
    subject_groups = models.ManyToManyField(SubjectGroup, verbose_name="Skupina předmětů")
    school_levels = models.ManyToManyField(
        "teaching.SchoolLevel", related_name="education_types", verbose_name="Stupeň školy"
    )

    class Meta:
        verbose_name = "Typ vzdělání z hlediska zákona"
        verbose_name_plural = "Typ vzdělání z hlediska zákona"
        ordering = (
            "id",
            "qualification_type",
        )

    def __str__(self):
        return f"[{self.qualification_type}: {self.title}, {self.get_school_levels()}, {self.get_subject_groups()}, {self.get_specializations()}]"

    def get_school_levels(self):
        return ", ".join(school_level.name for school_level in self.school_levels.all())

    get_school_levels.short_description = "Stupně školy"

    def get_subject_groups(self):
        return ", ".join(subject_group.name for subject_group in self.subject_groups.all())

    get_subject_groups.short_description = "Skupiny předmětů"

    def get_specializations(self):
        return ", ".join(specialization.name for specialization in self.specializations.all())

    get_specializations.short_description = "Oblast VŠ vzdělávání"


class Qualification(TimeStampedModel):
    legal_paragraph = models.CharField("Paragraf zákona", max_length=400)
    example = models.CharField("Příklad", max_length=1000)
    row_id = models.SmallIntegerField(unique=True)
    subject_groups = models.ManyToManyField(SubjectGroup, verbose_name="Skupiny předmětů")
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
        # ordering = ("row_id",)

    def __str__(self):
        return str(self.id)

    def get_subject_groups(self):
        return ", ".join(subject_group.name for subject_group in self.subject_groups.all())

    get_subject_groups.short_description = "Skupiny předmětů"

    def get_education_types(self):
        return mark_safe("<br/>".join(str(education_type) for education_type in self.education_types.all()))

    get_education_types.short_description = "Vzdělání z hlediska zákona"
    get_education_types.allow_tags = True


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
