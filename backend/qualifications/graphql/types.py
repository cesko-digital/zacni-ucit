import graphene


class TitleType(graphene.ObjectType):
    id = graphene.Int()
    name = graphene.String()
    code = graphene.String()


class CollegeAreaType(graphene.ObjectType):
    id = graphene.Int()
    name = graphene.String()

