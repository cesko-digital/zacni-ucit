import graphene


class UserType(graphene.ObjectType):
    id = graphene.Int()
    email = graphene.String()
