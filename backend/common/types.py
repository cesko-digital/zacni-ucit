import graphene
from graphene.types.generic import GenericScalar

from common.choices import ErrorCode

ErrorCodeType = graphene.Enum.from_enum(ErrorCode)


class ErrorType(graphene.ObjectType):
    code = ErrorCodeType(required=True)
    messages = graphene.List(graphene.String, description="Human readable error messages")
    data = GenericScalar(description="Additional error data")
