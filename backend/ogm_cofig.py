from django.apps import AppConfig
from py2neo import Graph
from django.conf import settings


graph = Graph(
    host=settings.NEO4J_HOST,
    port=settings.NEO4J_PORT,
    user=settings.NEO4J_USER,
    password=settings.NEO4J_PASSWORD,
)


class OGMConfig(AppConfig):
    name = 'ogm'
