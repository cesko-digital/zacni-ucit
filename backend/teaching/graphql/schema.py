import graphene
from teaching.graphql.types import SchoolLevelType, SubjectType
from teaching.models import SchoolLevel, Subject


class Query(graphene.ObjectType):
    school_levels = graphene.List(SchoolLevelType)
    subjects = graphene.List(SubjectType, school_level_ids=graphene.List(graphene.Int, required=False))
    want_to_teach_result = graphene.String()

    @staticmethod
    def resolve_school_levels(root, info):
        return SchoolLevel.objects.all()

    @staticmethod
    def resolve_subjects(root, info, school_level_ids: list = None):
        if school_level_ids:
            return Subject.objects.filter(school_levels__id__in=school_level_ids).distinct()
        return Subject.objects.all()

    @staticmethod
    def resolve_want_to_teach_result(root, info):
        # TODO We need to discuss how this result should work.
        #  We also need some cypher queries, to get the data from Neo4J
        return "Everything"
