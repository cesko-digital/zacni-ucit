import graphene
from colleges.graphql.types import CollegeType
from colleges.models import College


class Query(graphene.ObjectType):
    colleges = graphene.List(CollegeType)
    college = graphene.Field(CollegeType, pk=graphene.Int(required=True))

    @staticmethod
    def resolve_colleges(root, info):
        return College.objects.all()

    @staticmethod
    def resolve_college(root, info, pk: int):
        return College.objects.get(pk=pk)
