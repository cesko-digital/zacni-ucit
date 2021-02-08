import graphene
import colleges.graphql.schema
import colleges.graphql.mutations


class Query(colleges.graphql.schema.Query, graphene.ObjectType):
    is_alive = graphene.Boolean(description="Base API test")


class Mutations(colleges.graphql.mutations.Mutations, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutations)
