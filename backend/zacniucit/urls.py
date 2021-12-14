from django.contrib import admin
from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from graphene_django.views import GraphQLView

from common.views import homepage


urlpatterns = [
    path("", homepage, name="homepage"),
    path("admin/", admin.site.urls),
    path("graphql", csrf_exempt(GraphQLView.as_view(graphiql=True))),
    path("graphql/", csrf_exempt(GraphQLView.as_view(graphiql=True))),
]
