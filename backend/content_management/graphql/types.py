from content_management.models import WebSiteText
from graphene_django import DjangoObjectType
from graphene_django.types import ALL_FIELDS


class WebSiteTextType(DjangoObjectType):
    class Meta:
        model = WebSiteText
        fields = ALL_FIELDS
