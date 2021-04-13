from graphene_django import DjangoObjectType
from graphene_django.types import ALL_FIELDS

from qualifications.models import Title, CollegeArea


class TitleObjectType(DjangoObjectType):
    class Meta:
        model = Title
        fields = ALL_FIELDS


class CollegeAreaObjectType(DjangoObjectType):
    class Meta:
        model = CollegeArea
        fields = ALL_FIELDS
