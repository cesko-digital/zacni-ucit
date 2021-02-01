import graphene
from graphene.types.generic import GenericScalar

from zacniucit.core.choices import ErrorCode

ErrorCodeType = graphene.Enum.from_enum(ErrorCode)


class ErrorType(graphene.ObjectType):
    code = ErrorCodeType(required=True)
    message = graphene.String(description="Human readable message for debugging")
    data = GenericScalar(description="Additional error data")
