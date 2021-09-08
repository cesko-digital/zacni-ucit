from graphene_django import DjangoObjectType
from graphene_django.types import ALL_FIELDS

from qualifications.models import (
    Title,
    CollegeArea,
    CollegeProgramme,
    EducationSpecialization,
    SubjectType,
    EducationType,
    OtherExperience,
)


class TitleObjectType(DjangoObjectType):
    class Meta:
        model = Title
        fields = ALL_FIELDS


class CollegeAreaObjectType(DjangoObjectType):
    class Meta:
        model = CollegeArea
        fields = ALL_FIELDS


class CollegeProgrammeObjectType(DjangoObjectType):
    class Meta:
        model = CollegeProgramme
        fields = ALL_FIELDS


class EducationSpecializationObjectType(DjangoObjectType):
    class Meta:
        model = EducationSpecialization
        fields = ALL_FIELDS


class SubjectTypeObjectType(DjangoObjectType):
    class Meta:
        model = SubjectType
        fields = ALL_FIELDS


class EducationTypeObjectType(DjangoObjectType):
    class Meta:
        model = EducationType
        fields = ALL_FIELDS


class OtherExperienceObjectType(DjangoObjectType):
    class Meta:
        model = OtherExperience
        fields = ALL_FIELDS
