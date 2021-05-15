import graphene
import colleges.graphql.schema
import colleges.graphql.mutations
import teaching.graphql.schema
import qualifications.graphql.schema
import accounts.graphql.mutations
import teaching.graphql.mutations

from graphql_auth.schema import MeQuery


class Query(
    MeQuery,
    qualifications.graphql.schema.Query,
    colleges.graphql.schema.Query,
    teaching.graphql.schema.Query,
    graphene.ObjectType,
):
    is_alive = graphene.Boolean(description="Base API test")


class Mutations(
    accounts.graphql.mutations.Mutations,
    colleges.graphql.mutations.Mutations,
    teaching.graphql.mutations.Mutations,
    graphene.ObjectType
):
    pass


schema = graphene.Schema(query=Query, mutation=Mutations)
