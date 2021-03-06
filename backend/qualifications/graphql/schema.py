import graphene
from qualifications.graphql.types import TitleType, CollegeAreaType
from qualifications.models import Title, CollegeArea


class Query(graphene.ObjectType):
    titles = graphene.List(TitleType)
    title = graphene.Field(TitleType, pk=graphene.Int(required=True))
    college_areas = graphene.List(CollegeAreaType)
    college_area = graphene.Field(CollegeAreaType, pk=graphene.Int(required=True))

    @staticmethod
    def resolve_titles(root, info):
        return Title.objects.all()

    @staticmethod
    def resolve_title(root, info, pk: int):
        return Title.objects.get(pk=pk)

    @staticmethod
    def resolve_college_areas(root, info):
        return CollegeArea.objects.all()

    @staticmethod
    def resolve_collage_area(root, info, pk: int):
        return CollegeArea.objects.get(pk=pk)
