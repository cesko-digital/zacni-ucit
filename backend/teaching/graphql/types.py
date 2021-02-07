import graphene


class SchoolLevelType(graphene.ObjectType):
    id = graphene.Int()
    name = graphene.String()


class SubjectType(graphene.ObjectType):
    id = graphene.Int()
    name = graphene.String()
    code = graphene.String()
