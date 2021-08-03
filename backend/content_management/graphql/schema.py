import graphene
from .models import WebSiteText


class Query(graphene.ObjectType):
    texts = graphene.List(WebSiteTextType)
    text_by_page_id = graphene.Field(WebSiteTextType, pk=graphene.Int(required=True))
    text_by_element_id = graphene.Field(WebSiteTextType, pk=graphene.Int(required=True))

    @staticmethod
    def resolve_texts(root, info):
        return WebSiteText.objects.all()

    @staticmethod
    def resolve_text_by_page_id(root, info, pk: int):
        return WebSiteText.objects.get(pk=pk)

    @staticmethod
    def resolve_text_by_element_id(root, info, pk: int):
        return WebSiteText.objects.get(pk=pk)
