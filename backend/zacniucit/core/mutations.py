import graphene
from zacniucit.core.choices import ErrorCode
from zacniucit.core.types import ErrorType


class MutationValidationError(Exception):
    def __init__(self, code: ErrorCode, message: str = None, data=None):
        self.code = code
        self.message = message
        self.data = data


class BaseMutation(graphene.Mutation):
    ok = graphene.Boolean()
    errors = graphene.List(ErrorType)

    @classmethod
    def mutate(cls, root, info, **kwargs):
        try:
            result = cls.perform_mutate(root, info, **kwargs)
            return result
        except MutationValidationError as e:
            return cls(ok=False, errors=[ErrorType(code=e.code, message=e.message, data=e.data)])

    @classmethod
    def perform_mutate(cls, root, info, *args, **kwargs):
        raise NotImplementedError()
