import graphene
from colleges.models import College


class CollegeTypeEnum(graphene.Enum):
    COLLEGE_TYPE_UNIVERSITY = College.TYPE_UNIVERSITY
    COLLEGE_TYPE_NON_UNIVERSITY = College.TYPE_NON_UNIVERSITY


class CollegeFormEnum(graphene.Enum):
    COLLEGE_FORM_PRIVATE = College.FORM_PRIVATE
    COLLEGE_FORM_GOV = College.FORM_GOV
    COLLEGE_FORM_PUBLIC = College.FORM_PUBLIC


class CollegeType(graphene.ObjectType):
    id = graphene.Int()
    name = graphene.String()
    type = CollegeTypeEnum()
    form = CollegeFormEnum()
    address = graphene.String()
    rid = graphene.String()
    ic = graphene.String()
    databox = graphene.String()
    url = graphene.String()
    code = graphene.String()
