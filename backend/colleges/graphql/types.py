from colleges.models import College, Faculty, Course
from graphene_django import DjangoObjectType
from graphene_django.types import ALL_FIELDS


class CollegeObjectType(DjangoObjectType):
    class Meta:
        model = College
        fields = ALL_FIELDS


class FacultyObjectType(DjangoObjectType):
    class Meta:
        model = Faculty
        fields = ALL_FIELDS


class CourseObjectType(DjangoObjectType):
    class Meta:
        model = Course
        fields = ALL_FIELDS
