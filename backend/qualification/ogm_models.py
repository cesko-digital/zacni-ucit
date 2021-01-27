from py2neo import Graph, NodeMatcher, Node, Relationship
from py2neo.ogm import GraphObject, Property, RelatedTo, Related
from datetime import datetime
from app.ogm.apps import graph
import json

class BaseModel(GraphObject):
    """
    Implements some basic functions to guarantee some standard functionality
    across all models. The main purpose here is also to compensate for some
    missing basic features that we expected from GraphObjects, and improve the
    way we interact with them.
    """

    timestamp = Property()

    def __init__(self, **kwargs):
        self.timestamp = datetime.now()
        for key, value in kwargs.items():
            if hasattr(self, key):
                setattr(self, key, value)

    @property
    def all(self):
        return self.match(graph)

    def save(self):
        graph.push(self)

    def get_by_id(self, id):
        return graph.nodes.get(id)


class Role(BaseModel):
    __primarykey__ = 'name'

    name = Property()

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    def as_dict(self):
        return {
            'name': self.name,
        }

    def get_by_name(self):
        return self.match(graph).where(f"_.name = '{self.name}'").first()

    def fetch_by_user_id(self, user_id):
        x = graph.run("""MATCH (r:Role)-[:ROLE]-(u:User)
                            WHERE id(u) = $user_id
                            RETURN id(r), r.name""", user_id=user_id).data()
        return self.parse_role(x[0]) if len([i for i in x]) > 0 else {}

    def add_role_to_user(self, email):
        self.__save_if_new(self.name)
        if self.__check_not_assigned(email):
            results = graph.run("""
            MATCH (u:User), (r:Role)
            WHERE u.email = $email AND r.name = $name
            CREATE (u)-[c:ROLE]->(r)
            RETURN id(r), r.name
            """, email=email, name=self.name).data()
            return True
        return False

    def parse_role(self, x):
        return {'id': x['id(r)'], 'name': x['r.name']}

    def __check_not_assigned(self, email):
        results = graph.run("""
        MATCH (u:User)-[c:ROLE]-(r:Role)
        WHERE u.email = $email AND r.name = $name
        RETURN id(c)
        """, email=email, name=self.name).data()
        return len(results) == 0

    def __save_if_new(self, name):
        self.name = name
        if not self.get_by_name():
            self.save()
