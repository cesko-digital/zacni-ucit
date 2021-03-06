import graphene
from qualifications.graphql.types import TitleType
from qualifications.models import Title


class Query(graphene.ObjectType):
    titles = graphene.List(TitleType)
    title = graphene.Field(TitleType, pk=graphene.Int(required=True))

    @staticmethod
    def resolve_titles(root, info):
        return Title.objects.all()

    @staticmethod
    def resolve_title(root, info, pk: int):
        return Title.objects.get(pk=pk)
