import graphene
import colleges.graphql.schema
import colleges.graphql.mutations
import teaching.graphql.schema


class Query(colleges.graphql.schema.Query, teaching.graphql.schema.Query, graphene.ObjectType):
    is_alive = graphene.Boolean(description="Base API test")


class Mutations(colleges.graphql.mutations.Mutations, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutations)
