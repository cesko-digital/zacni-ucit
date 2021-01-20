from django.apps import AppConfig
from py2neo import Graph
from app.ogm import config



graph = Graph(
    host=config.NEO4J_HOST,
    port=config.NEO4J_PORT,
    user=config.NEO4J_USER,
    password=config.NEO4J_PASSWORD,
)


class OGMConfig(AppConfig):
    name = 'ogm'
