import graphene
from teaching.graphql.types import SchoolLevelObjectType, SubjectObjectType
from teaching.models import SchoolLevel, Subject


class Query(graphene.ObjectType):
    school_levels = graphene.List(SchoolLevelObjectType)
    subjects = graphene.List(SubjectObjectType, school_level_ids=graphene.List(graphene.Int, required=False))

    @staticmethod
    def resolve_school_levels(root, info):
        return SchoolLevel.objects.all()

    @staticmethod
    def resolve_subjects(root, info, school_level_ids: list = None):
        if school_level_ids:
            return Subject.objects.filter(school_levels__id__in=school_level_ids).distinct()
        return Subject.objects.all()
