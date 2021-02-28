import graphene
import typing
from common.choices import ErrorCode
from common.types import ErrorType


class MutationValidationError(Exception):
    def __init__(self, code: ErrorCode, messages: typing.List[str] = None, data=None):
        self.code = code
        self.messages = messages
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
            return cls(ok=False, errors=[ErrorType(code=e.code, messages=e.messages, data=e.data)])

    @classmethod
    def perform_mutate(cls, root, info, *args, **kwargs):
        raise NotImplementedError()
