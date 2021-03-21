from graphene_django import DjangoObjectType
from graphene_django.types import ALL_FIELDS

from teaching.models import SchoolLevel, Subject


class SchoolLevelObjectType(DjangoObjectType):
    class Meta:
        model = SchoolLevel
        fields = ALL_FIELDS


class SubjectObjectType(DjangoObjectType):
    class Meta:
        model = Subject
        fields = ALL_FIELDS
