from django.conf import settings


# Currently obsolete for this project, leaving un touch here
class GraphModel:
    """
    Generic mixin for publishing Django models to graph DB.

    Usage:

        # publishing simple model without relations
        # you just need to add GraphModel mixin and override graph_data method

        class Manufacturer(TimeStampedModel, GraphModel):
            name = models.CharField(max_length=100)

            def graph_data(self):
                return {
                    'name': self.name,
                }


        # when model have 1:N relation you need to define also related_graph_data method

        class Car(TimeStampedModel, GraphModel):
            model = models.CharField(max_length=100)
            manufacturer = models.ForeignKey(Manufacturer, on_delete=models.SET_NULL, null=True)

            def graph_data(self):
                return {
                    'name': self.name,
                }

            def related_graph_data(self):
                return [
                    # Car - BELONGS_TO -> Manufacturer
                    ("-", "BELONGS_TO", "->", self.manufacturer)
                ]
    """

    def graph_exists(self):
        """
        Return True if object exists in graph DB.
        """
        if not self.id:
            return False

        query = f"""
            MATCH (node:{self.__class__.__name__} {{id: $id}})
            RETURN node
        """
        result = settings.GRAPH.run(query, id=self.id)
        return bool(result.data())

    def common_graph_data(self, extra=None):
        """
        Return common data which are used in all models. Optional extra dictionary will be
        merged to common data if provided.
        """
        out = {"id": self.id, "created": self.created, "modified": self.modified}
        if extra:
            out.update(extra)
        return out

    def graph_data(self):
        """
        Return dictionary with object data which will be saved in graph DB.

        Example:

            def graph_data(self):
                return {
                    'name': self.name,
                }

        Beware! Returned data dictionary must not contain relational data. Check
        related_graph_data method please.
        """
        raise NotImplemented

    def related_graph_data(self):
        """
        Define relations between objects. This data structure is later used in graph_save_relations
        and graph_delete_relations methods to mirror SQL relations to graph DB.

        Example:

            def related_graph_data(self):
                return [
                    ("-", "BELONGS_TO", "->", self.area),
                ]

        Each item consist of the following parts:

            (relation1, relation_label, relation2, target_object)

        Where
            relation1, relation2 are strings like "-", "->" or "<-"
            relation_label is label describing relation
            target_object is object attribute with relation
        """
        return []

    def graph_save(self):
        """
        Save object to graph DB.
        """
        if not self.id:
            return

        # get query data
        data = self.common_graph_data(self.graph_data())

        # exists?
        if self.graph_exists():
            # update
            attributes = [f"node.{k} = ${k}" for k in data if k != "id"]
            query = f"""
                MATCH (node:{self.__class__.__name__} {{id: $id}})
                SET {', '.join(attributes)}
            """
        else:
            # create
            attributes = [f"{k}: ${k}" for k in data]
            query = f"""
                CREATE (node:{self.__class__.__name__} {{ {', '.join(attributes)} }})
            """
        settings.GRAPH.run(query, **data)

        # save also relations
        self.graph_save_relations()

    def graph_save_relations(self):
        """
        Save relations between objects to graph DB.
        """
        for (r1, rlabel, r2, attr_name) in self.related_graph_data():
            field = self._meta.get_field(attr_name)
            if not field.is_relation:
                continue

            value = getattr(self, attr_name, None)
            if not value:
                continue

            node2_model = field.related_model.__name__
            if field.many_to_many:
                nodes2 = value.all()
            elif field.one_to_one:
                nodes2 = [value]
            else:
                nodes2 = [value]

            query = f"""
                MATCH (node1:{self.__class__.__name__} {{id: $node1_id}})
                MATCH (node2:{node2_model} {{id: $node2_id}})
                MERGE (node1){r1}[:{rlabel}]{r2}(node2)
            """
            for value in nodes2:
                exists = getattr(value, "graph_exists")
                if not exists():
                    # if related model doesn't exist in graph db, save it before we make relation
                    save = getattr(value, "graph_save")
                    save()

                settings.GRAPH.run(query, node1_id=self.id, node2_id=value.id)

    def graph_delete(self):
        """
        Delete object from graph DB.
        """
        if not self.id:
            return

        self.graph_delete_relations()

        query = f"""
            MATCH (node:{self.__class__.__name__} {{id: $id}})
            DELETE node
        """
        settings.GRAPH.run(query, id=self.id)

    def graph_delete_relations(self):
        """
        Delete relations between objects from graph DB.
        """
        for (r1, rlabel, r2, attr_name) in self.related_graph_data():
            field = self._meta.get_field(attr_name)
            if not field.is_relation:
                continue

            value = getattr(self, attr_name, None)
            if not value:
                continue

            node2_model = field.related_model.__name__
            if field.many_to_many:
                nodes2 = value.all()
            elif field.one_to_one:
                nodes2 = [value]
            else:
                nodes2 = [value]

            query = f"""
                MATCH (:{self.__class__.__name__} {{id: $node1_id}}){r1}[r:{rlabel}]{r2}(:{node2_model} {{id: $node2_id}})
                DELETE r
            """
            for value in nodes2:
                settings.GRAPH.run(query, node1_id=self.id, node2_id=value.id)
