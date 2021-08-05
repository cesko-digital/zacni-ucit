import graphene
from content_management.models import WebSiteText
from content_management.graphql.types import WebSiteTextType


class Query(graphene.ObjectType):
    text_by_page_id = graphene.Field(WebSiteTextType, pk=graphene.Int(required=True))
    text_by_element_id = graphene.Field(WebSiteTextType, pk=graphene.Int(required=True))

    @staticmethod
    def resolve_text_by_page_id(root, info, pk: int):
        return WebSiteText.objects.get(pk=pk)

    @staticmethod
    def resolve_text_by_element_id(root, info, pk: int):
        return WebSiteText.objects.get(pk=pk)
