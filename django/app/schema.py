import graphene
from graphene_django import DjangoObjectType
from app.orm.models import SchoolLevel, SubjectCategory


class SchoolLevelType(DjangoObjectType):
    class Meta:
        model = SchoolLevel
        fields = ("__all__")


class SubjectCategoryType(DjangoObjectType):
    class Meta:
        model = SubjectCategory
        fields = ("__all__")


class Query(graphene.ObjectType):
    all_school_levels = graphene.List(SchoolLevelType)
    subject_category_by_name = graphene.Field(SubjectCategoryType, name=graphene.String(required=True))

    @staticmethod
    def resolve_all_school_levels(root, info):
        return SchoolLevel.objects.all()

    @staticmethod
    def resolve_subject_category_by_name_by_name(root, info, name):
        try:
            return SubjectCategory.objects.get(name=name)
        except SubjectCategory.DoesNotExist:
            return None


schema = graphene.Schema(query=Query)
