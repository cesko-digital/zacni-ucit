import graphene
from teaching.graphql.types import SchoolLevelType, SubjectType
from teaching.models import SchoolLevel, Subject


class Query(graphene.ObjectType):
    school_levels = graphene.List(SchoolLevelType)
    subjects = graphene.Field(SubjectType, school_level_ids=graphene.List(graphene.Int, required=False))
    want_to_teach_result = graphene.String()

    @staticmethod
    def resolve_school_levels(root, info):
        return SchoolLevel.objects.all()

    @staticmethod
    def resolve_subjects(root, info, school_level_ids: list = None):
        if school_level_ids:
            # TODO filter Subjects based on given school levels (currently we don't have this attr on Subject)
            return Subject.objects.all()
        return Subject.objects.all()

    @staticmethod
    def resolve_want_to_teach_result(root, info):
        # TODO We need to discuss how this result should work.
        #  We also need some cypher queries, to get the data from Neo4J
        return "Everything"
