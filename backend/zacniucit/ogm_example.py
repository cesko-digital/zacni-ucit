from py2neo import Graph, NodeMatcher, Node, Relationship
from py2neo.ogm import GraphObject, Property, RelatedTo, Related
from datetime import datetime
from app.functions import group_by
from app import settings
import spacy
import json

nlp = spacy.load('en_core_web_lg')

graph = Graph(
    host=settings.NEO4J_HOST,
    port=settings.NEO4J_PORT,
    user=settings.NEO4J_USER,
    password=settings.NEO4J_PASSWORD,
)


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


class User(BaseModel):
    __primarykey__ = 'email'

    name = Property()
    password = Property()
    email = Property()
    role = Property()

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    def as_dict(self):
        return {
            'id': self._GraphObject__ogm.node.identity,
            'name': self.name,
            'email': self.email,
            'role': self.role
        }

    def parse_author(self, x):
        return {'id': x['id(u)'], 'name': x['u.name'], 'email': x['u.email'], 'role': x['u.role']}

    def get_by_email(self):
        return self.match(graph).where(f"_.email = '{self.email}'").first()

    def fetch_by_statement_id(self, id):
        x = graph.run("""MATCH (u:User)-[:CREATED_BY]-(s:Statement) 
                      WHERE id(s) = $id
                      RETURN id(u), u.name, u.email, u.role""", id=id).data()
        return self.parse_author(x[0]) if len([i for i in x]) > 0 else {}

    def check_not_exists(self, email):
        self.email = email
        return not self.fetch_by_email()


class TypeGroup(BaseModel):
    __primarykey__ = 'name'

    name = Property()

    @staticmethod
    def dict(node):
        return {
            'id': node.identity,
            'name': node.get('name'),
            'group': node.get('group'),
            'timestamp': node.get('timestamp')
        }

    def as_dict(self):
        return {
            'id': self._GraphObject__ogm.node.identity,
            'name': self.name,
            'group': self.group,
            'timestamp': self.timestamp,
        }

    def get_by_name(self):
        return self.match(graph).where(f"_.name = '{self.name}'").first()



class Type(BaseModel):
    __primarykey__ = 'name'

    name = Property()

    @staticmethod
    def dict(node):
        return {
            'id': node.identity,
            'name': node.get('name'),
            'timestamp': node.get('timestamp')
        }

    def as_dict(self):
        return {
            'id': self._GraphObject__ogm.node.identity,
            'name': self.name,
            'timestamp': self.timestamp,
        }

    def get_by_name(self):
        return self.match(graph).where(f"_.name = '{self.name}'").first()

    def all(self):
        results = graph.run("""MATCH (t:Type)-[:GROUP]-(g:TypeGroup)
                        WHERE t.name <> 'Topic'
                        RETURN id(t), t.name, g.name, t.timestamp""").data()
        return group_by([self.parse_type(x) for x in results], "name", "group")

    def fetch_addable_for_topic_by_query(self, query, topic_id):
        results = graph.run("""MATCH path=(c:Type)<-[:TYPE]-(topic:Statement)
                            WHERE (c)<-[:TYPE]-(topic) AND id(topic) = $topic_id
                            WITH path
                            MATCH (t:Type)-[:GROUP]-(g:TypeGroup)
                            WHERE NOT t IN nodes(path) AND toLower(t.name) STARTS WITH toLower($query)
                            RETURN id(t), t.name, g.name, t.timestamp""", query=query, topic_id=topic_id).data()
        return group_by([self.parse_type(x) for x in results], "name", "group")

    def fetch_type_by_statement_id(self, id):
        results = graph.run("""MATCH (s:Statement)-[:TYPE]-(t:Type)-[:GROUP]-(g:TypeGroup)
                            WHERE id(s) = $statement_id
                            RETURN id(t), t.name, g.name, t.timestamp""", statement_id=id).data()
        types = group_by([self.parse_type(x) for x in results], "name", "group")
        return types[0] if types and len(types) else {}

    def fetch_types_by_topic(self, topic_id):
        results = graph.run("""MATCH (top:Statement)-[:LINK]-(:Relation)-[:LINK]-(s:Statement)-[:TYPE]-(t:Type)-[:GROUP]-(g:TypeGroup)
                            WHERE id(top) = $topic_id AND t.name <> 'Topic'
                            RETURN id(t), t.name, g.name, t.timestamp""", topic_id=topic_id).data()
        return group_by([self.parse_type(x) for x in results], "name", "group")

    def fetch_type_by_query(self, query):
        results = graph.run("""MATCH (t:Type)-[:GROUP]-(g:TypeGroup)
                            WHERE toLower(t.name) STARTS WITH toLower($query)
                            RETURN id(t), t.name, g.name, t.timestamp""", query=query).data()
        return group_by([self.parse_type(x) for x in results], "name", "group")

    def parse_type(self, x):
        return {'id': x['id(t)'], 'name': x['t.name'], 'timestamp': x['t.timestamp'], 'group': x['g.name']}



class Space(BaseModel):
    __primarykey__ = 'name'

    name = Property()
    creator = RelatedTo("User", 'CREATED_BY')

    @staticmethod
    def dict(node):
        return {
            'id': node.identity,
            'name': node.get('text'),
            'timestamp': node.get('timestamp')
        }

    def as_dict(self):
        return {
            'id': self._GraphObject__ogm.node.identity,
            'name': self.text,
            'timestamp': self.timestamp,
        }

    def get_by_name(self):
        return self.match(graph).where(f"_.name = '{self.name}'").first()



class Relation(BaseModel):
    __primarykey__ = '__id__'

    creator = RelatedTo("User", 'CREATED_BY')
    link = Related("Statement", 'LINK')
    space = RelatedTo("Space", "PART_OF")

    def __link_statements(self, a, b, user):
        self.link.add(a)
        self.link.add(b)
        self.creator.add(user)
        self.save()

    def submit(self, statement_a, statement_b, creator):
        user_id = creator.as_dict()['id']
        statement_a_id = statement_a.as_dict()['id']
        statement_b_id = statement_b.as_dict()['id']
        if self.__verify_not_related_by_user(statement_a_id, statement_b_id, user_id):
            self.__link_statements(statement_a, statement_b, creator)

    def __verify_not_related_by_user(self, a_id, b_id, user_id):
        result = graph.run("""
        MATCH (a:Statement)-[:LINK]-(r:Relation)-[:LINK]-(b:Statement)
        WHERE id(a) = $a_id AND id(b) = $b_id
        MATCH (r)-[]->(u:User) 
        WHERE id(u) = {user_id} RETURN r
        """, a_id=a_id, b_id=b_id, user_id=user_id)
        return result.evaluate() is None


class WordType():
    doc = None

    def __init__(self, text):
        self.doc = nlp(text)

    def search_nouns(self):
        return [self.__create_element_pos(token) for token in self.doc if token.pos_ in ["PROPN", "NOUN"]]

    def search_names(self):
        return self.__create_names()

    def validate(self):
        return [{'is_oov': not nlp.vocab.has_vector(token.lemma_), 'token': token.text} for token in self.doc]

    def __create_names(self):
        names = []
        previous_index = None
        current = []
        for index, token in enumerate(self.doc):
            if token.pos_ in ["PROPN", "NOUN"] and (previous_index == index - 1 or previous_index == None):
                word = token.lemma_ if token.lemma_ != token.text else token.text
                current.append(word)
                previous_index = index
            else:
                previous_index = None
                if len(current) > 0: names.append("-".join(current))
                current = []
            if index == len(self.doc) - 1 and len(current) > 0:
                names.append("-".join(current))
        return names

    def __create_element_pos(self, token):
        return {"original": token.text, "lemma": token.lemma_, "pos": token.pos_ }


class Element(BaseModel):
    __primarykey__ = '__id__'
    name = Property()
    creator = RelatedTo("User", 'CREATED_BY')
    type = RelatedTo("Type", 'TYPE')

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    @staticmethod
    def dict(node):
        return {
            'id': node.identity,
            'name': node.get('name'),
            'timestamp': node.get('timestamp')
        }

    def as_dict(self):
        return {
            'id': self._GraphObject__ogm.node.identity,
            'name': self.name,
            'timestamp': self.timestamp,
        }

    def get_by_name(self):
        return self.match(graph).where(f"_.name = '{self.name}'").first()

    def parse_element(self, x):
        return {'id': x['id(e)'], 'name': x['e.name'], 'timestamp': x['e.timestamp'], 'pos': x['e.pos']}

    def fetch_by_creator(self, email):
        results = graph.run("""MATCH (e:Element)-[:CREATED_BY]-(u:User) 
                            WHERE u.email = $email
                            RETURN id(e), e.name, e.timestamp, e.pos""", email=email).data()
        results = [self.parse_element(x) for x in results]
        return results

    def fetch_by_query(self, query):
        results = graph.run("""MATCH (e:Element)
                            WHERE toLower(e.name) STARTS WITH toLower($query) 
                            RETURN id(e), e.name, e.timestamp, e.pos""", query=query).data()
        return [self.parse_element(x) for x in results]

    def fetch_by_type(self, type):
        results = graph.run("""MATCH (e:Element)-[:TYPE]-(t:Type) 
                            WHERE t.name = $type
                            RETURN id(e), e.name, e.timestamp, e.pos """, type=type).data()
        return [self.parse_element(x) for x in results]


    def fetch_by_statement_id(self, statement_id):
        results = graph.run("""MATCH (e:Element)-[:CONTAINS]-(s:Statement)
                            WHERE id(s) = $id
                            RETURN id(e), e.name, e.timestamp, e.pos """, id=statement_id).data()
        return [self.parse_element(x) for x in results]

    def fetch_by_name_and_type(self, type):
        results = graph.run("""MATCH (e:Element)-[:TYPE]-(t:Type) 
                            WHERE t.name = $type AND e.name = $name
                            RETURN id(e), e.name, e.timestamp, e.pos""", type=type, name=self.name).data()
        return [self.parse_element(x) for x in results]

    def process_contained_elements(self, text, statement_id, elements):
        for el in elements:
            self.__verify_and_link_element(el, statement_id)
        self.__remove_all_auto_linked_elements(statement_id)
        self.__auto_link_elements(text, statement_id)

    def __verify_and_link_element(self, el, statement_id):
        id = self.__create_element_if_not_exists(name=el['name'])
        if self.__check_element_not_linked(element_id=id, statement_id=statement_id):
            element_node = self.get_by_id(id)
            self.__link_element(element_node=element_node, statement_id=statement_id, auto=False)

    def __remove_all_auto_linked_elements(self, statement_id):
        graph.run("""MATCH (s:Statement)-[r:CONTAINS]-(e:Element)
                   WHERE id(s) = $statement_id AND r.auto = true
                   DELETE r""", statement_id=statement_id)

    def __auto_link_elements(self, text, statement_id):
        for name in WordType(text).search_names():
            id = self.__create_element_if_not_exists(name=name)
            if self.__check_element_not_linked(element_id=id, statement_id=statement_id):
                element_node = self.get_by_id(id)
                self.__link_element(element_node=element_node, statement_id=statement_id, auto=True)

    def __link_element(self, element_node, statement_id, auto):
        statement_node = Statement().get_by_id(statement_id)
        properties = {"timestamp": datetime.now(), "auto": auto}
        graph.create(Relationship(statement_node, "CONTAINS", element_node, **properties))

    def __create_element_if_not_exists(self, name):
        id = self.__check_element_exists(name)
        if id is None:
            id = self.__create_element(name)
        return id

    def __check_element_not_linked(self, element_id, statement_id):
        results = graph.run("""MATCH (e:Element)-[:COINTAINS]-(s:Statement)
                       WHERE id(e) = $element_id AND id(s) = $statement_id
                       RETURN id(e)""", element_id=element_id, statement_id=statement_id).data()
        return not results or len(results) == 0

    def __check_element_exists(self, name):
        results = graph.run("""MATCH (e:Element)
                       WHERE e.name = $name
                       RETURN id(e)""", name=name).data()
        return results[0]['id(e)'] if len(results) > 0 else None

    def __create_element(self, name):
        element = Node("Element", name=name, timestamp=datetime.now())
        graph.create(element)
        element = Element(name=name).get_by_name()
        return element.as_dict()['id']


class Statement(BaseModel):
    __primarykey__ = '__id__'
    text = Property()
    is_version = Property()
    creator = RelatedTo("User", 'CREATED_BY')
    elements = RelatedTo("Element", 'CONTAINS')
    version = RelatedTo("Statement", 'VERSION')
    type = RelatedTo("Type", 'TYPE')

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.is_version = False

    @staticmethod
    def dict(node):
        return {
            'id': node.identity,
            'text': node.get('text'),
            'is_version': node.get('version'),
            'timestamp': node.get('timestamp')
        }

    def as_dict(self):
        return {
            'id': self._GraphObject__ogm.node.identity,
            'text': self.text,
            'is_version': self.version,
            'timestamp': self.timestamp,
        }

    def all(self):
        results = graph.run("""MATCH (s:Statement)-[:TYPE]-(t:Type) WHERE s.is_version = false
                               RETURN id(s), s.text, s.timestamp, t.name""").data()
        return [self.parse_statement(x) for x in results]

    def get_by_text(self):
        return self.match(graph).where(f"_.text = '{self.text}'").first()

    def parse_statement(self, x):
        return {'id': x['id(s)'], 'text': x['s.text'], 'timestamp': x['s.timestamp'], 'type_name': x['t.name']}

    def fetch_by_text(self):
        x = graph.run("""MATCH (s:Statement)-[:TYPE]-(t:Type)
                      WHERE s.text = $text
                      RETURN id(s), s.text, s.timestamp, t.name""", text=self.text).data()
        return self.parse_statement(x[0]) if len([i for i in x]) > 0 else {}

    def fetch_by_id(self, id):
        x = graph.run("""MATCH (u:User)-[:CREATED_BY]-(s:Statement)-[:TYPE]-(t:Type) 
                      WHERE id(s) = $id 
                      RETURN id(s), s.text, s.timestamp, t.name, id(u), u.name, u.email""", id=id).data()
        return self.parse_statement(x[0]) if len([i for i in x]) > 0 else {}

    def fetch_topic_by_query(self, query):
        results = graph.run("""MATCH (s:Statement)-[:TYPE]-(t:Type)
                                WHERE toLower(s.text) STARTS WITH toLower($query) AND t.name = 'Topic' AND s.is_version = false
                                RETURN id(s), s.text, s.timestamp, t.name""", query=query).data()
        return [self.parse_statement(x) for x in results]

    def fetch_by_type(self, type_name):
        results = graph.run("""MATCH (u:User)-[:CREATED_BY]-(s:Statement)-[:TYPE]-(t:Type) 
                            WHERE t.name = $type_name AND s.is_version = false
                            RETURN id(s), s.text, s.timestamp, t.name, id(u), u.name, u.email""", type_name=type_name).data()
        return [self.parse_statement(x) for x in results]

    def fetch_related_topics(self, id):
        results = graph.run("""MATCH (s:Statement)-[:TYPE]-(t:Type)
                            WHERE t.name = 'Topic' AND s.is_version = false
                            RETURN id(s), s.text, s.timestamp, t.name""").data()
        results = [self.parse_statement(x) for x in results]
        return results

    def fetch_latest_related(self, id):
        results = graph.run("""MATCH (u:User)-[:CREATED_BY]-(a:Statement)-[:LINK]-(r:Relation)-[:LINK]-(s:Statement)
                            MATCH (s)-[:TYPE]-(t:Type) WHERE id(a) = $id AND s.is_version = false
                            RETURN id(s), s.text, s.timestamp, t.name, id(u), u.name, u.email""", id=id).data()
        results = sorted([self.parse_statement(x) for x in results], key = lambda i: i['timestamp'], reverse=True)[:3]
        return results

    def fetch_all_related(self, id):
        results = graph.run("""MATCH (u:User)-[:CREATED_BY]-(a:Statement)-[:LINK]-(r:Relation)-[:LINK]-(s:Statement)-[:TYPE]-(t:Type)
                            WHERE id(a) = $id  AND s.is_version = false AND t.name <> 'Topic'
                            RETURN id(s), s.text, s.timestamp, t.name, id(u), u.name, u.email""", id=id).data()
        results = [self.parse_statement(x) for x in results]
        return results

    def fetch_by_user(self, email):
        results = graph.run("""MATCH (t:Type)-[:TYPE]-(s:Statement)-[:CREATED_BY]-(u:User) 
                            WHERE u.email = $email AND s.is_version = false
                            RETURN id(s), s.text, s.timestamp, t.name, id(u), u.name, u.email""", email=email).data()
        results = [self.parse_statement(x) for x in results]
        return results

    def topics(self):
        results = graph.run("""MATCH (s:Statement)-[:TYPE]-(t:Type)
                            WHERE t.name = 'Topic' AND s.is_version = false
                            RETURN id(s), s.text, s.timestamp, t.name""").data()
        results = [self.parse_statement(x) for x in results]
        return results

    def topics_by_user(self, user_id):
        results = graph.run("""MATCH (u:User)-[:CREATED_BY]-(s:Statement)-[:TYPE]-(t:Type) 
                            WHERE t.name = 'Topic' AND id(u) = $user_id AND s.is_version = false
                            RETURN id(s), s.text, s.timestamp, t.name, id(u), u.name, u.email""", user_id=user_id).data()
        results = [self.parse_statement(x) for x in results]
        return results

    def fetch_by_topic_and_type(self, topic_id, type_id):
        results = graph.run("""MATCH (toty:Type)-[:TYPE]-(to:Statement)-[:LINK]-(r:Relation)-[:LINK]-(s:Statement)-[:TYPE]-(t:Type)
                            WHERE toty.name = 'Topic' AND id(to) = $topic_id AND id(t) = $type_id AND s.is_version = false
                            MATCH (s)-[:CREATED_BY]-(u:User) 
                            RETURN id(s), s.text, s.timestamp, t.name, id(u), u.name, u.email""", topic_id=topic_id, type_id=type_id).data()
        results = [self.parse_statement(x) for x in results]
        return results

    def fetch_related_by_id(self, id):
        results = graph.run("""MATCH (q:Statement)-[:LINK]-(r:Relation)-[:LINK]-(s:Statement)-[:CREATED_BY]-(u:User)
                            MATCH (s)-[:TYPE]-(t:Type) WHERE id(q) = $id AND s.is_version = false AND t.name <> 'Topic'
                            RETURN id(s), s.text, s.timestamp, t.name, id(u), u.name, u.email""", id=id).data()
        results = [self.parse_statement(x) for x in results]
        return results


    def analyze_statement(self):
        doc = nlp(self.text)
        results = [{'lemma': token.lemma_, 'pos': token.tag_[0:2], 'original': token.text,
                    'start': token.idx}
                   for token in doc if token.tag_[0:2] in ['VB', 'NN', 'JJ']]
        print(results)
        return results

    def submit(self, elements, type_id, email, linked_id, version_id):
        statement = self.get_by_text()
        if statement is None:
            self.save()
            self.__set_as_version(version_id)
        statement = self.get_by_text()
        id = statement.as_dict()['id']
        statement_node = self.get_by_id(id=id)
        user = User(email=email).get_by_email()
        user_node = self.get_by_id(user.as_dict()['id'])
        if statement.__verify_statement_not_linked(id, linked_id, email): statement.__link_to_statement(statement_node, linked_id, user_node)
        if statement.__verify_type_not_linked(type_id): statement.__link_to_type(statement_node, type_id)
        if statement.__verify_version_not_linked(id, version_id): statement.__link_version(statement_node, version_id)
        if statement.__verify_creator_not_linked(id, email): statement.__link_to_creator(statement_node, user_node)
        Element().process_contained_elements(statement.text, statement_id=id, elements=elements)
        return statement

    def submit_topic(self, email):
        statement = self.get_by_text()
        if statement is not None:
            return statement
        self.save()
        statement = self.get_by_text()
        id = statement.as_dict()['id']
        statement_node = self.get_by_id(id=id)
        user = User(email=email).get_by_email()
        user_node = self.get_by_id(user.as_dict()['id'])
        if self.__verify_type_not_linked(type_id=21): self.__link_to_type(statement_node, type_id=21) #Topic
        if self.__verify_creator_not_linked(id, email): self.__link_to_creator(statement_node, user_node)
        self.save()
        return self

    def search_statements_by_text(self):
        doc = nlp(self.text)
        results = graph.run("""MATCH (e:Element) WHERE e.name IN $tokens
                            MATCH (u:User)-[:CREATED_BY]-(s:Statement)-[r:CONTAINS]->(e)
                            MATCH (s)-[:TYPE]-(t:Type)
                            RETURN id(s), s.text, s.timestamp, id(u), u.name, u.email, t.name""", tokens=[token.text for token in doc]).data()
        results = [self.parse_statement(x) for x in results]
        return results

    def __set_as_version(self, version_id):
        result = graph.run("""MATCH (a:Statement)
                           WHERE id(a) = $id
                           SET a.version = True
                           RETURN a""", id=version_id)
        return result.evaluate() is None

    def __verify_creator_not_linked(self, id, email):
        result = graph.run("""MATCH (a:Statement)-[:CREATED_BY]-(u:User)
                           WHERE id(a) = $id AND u.email = $email
                           RETURN a""", id=id, email=email)
        return result.evaluate() is None

    def __verify_statement_not_linked(self, a_id, b_id, email):
        result = graph.run("""MATCH (a:Statement)-[:LINK]-(r:Relation)-[:LINK]-(b:Statement)
                           WHERE id(a) = $a_id AND id(b) = $b_id
                           MATCH (r)-[:CREATED_BY]-(u:User)
                           WHERE u.email = $email RETURN a""", a_id=a_id, b_id=b_id, email=email)
        return result.evaluate() is None

    def __verify_version_not_linked(self, id, version_id):
        result = graph.run("""MATCH (a:Statement)-[:VERSION]-(b:Statement)
                           WHERE id(a) = $a_id AND id(b) = $b_id RETURN a""", a_id=id, b_id=version_id)
        return result.evaluate() is None

    def __verify_type_not_linked(self, type_id):
        result = graph.run("""MATCH (a:Statement)-[:TYPE]-(t:Type)
                           WHERE id(t) = $type_id AND a.text = $text RETURN a""", type_id=type_id, text=self.text)
        return result.evaluate() is None

    def __link_to_statement(self, statement, linked_id, user):
        relation = Node("Relation", timestamp=datetime.now())
        linked_statement = self.get_by_id(linked_id)
        graph.create(Relationship(relation, "CREATED_BY", user))
        graph.create(Relationship(relation, "LINK", statement))
        graph.create(Relationship(relation, "LINK", linked_statement))

    def __link_to_creator(self, statement, user):
        graph.create(Relationship(statement, "CREATED_BY", user))

    def __link_to_type(self, statement, type_id):
        type = Type().get_by_id(id=type_id)
        graph.create(Relationship(statement, "TYPE", type))

    def __link_version(self, statement, version_id):
        if version_id:
            version = self.get_by_id(version_id)
            graph.create(Relationship(statement, "VERSION", version))

