import graphene

from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError as DjangoValidationError

from accounts.models import CustomUser, SetPasswordToken
from accounts.graphql.types import UserType
from common.choices import ErrorCode
from common.mutations import BaseMutation, MutationValidationError

import graphql_jwt.mutations


class CreateLoginResponseMixin:
    refresh = graphene.String()
    access = graphene.String()
    user = graphene.Field(UserType)

    @classmethod
    def create_login_response(cls, user: 'CustomUser'):
        # TODO added working JWT authentication
        return cls(ok=True, refresh='REFRESH', access='ACCESS', user=user)


class SubmitEmail(BaseMutation):
    class Arguments:
        email = graphene.String(required=True)

    @classmethod
    def perform_mutate(cls, root, info, **kwargs):
        email = kwargs.get("email")
        CustomUser.create_unactivated_user(email)
        return cls(ok=True)


class SetPassword(BaseMutation, CreateLoginResponseMixin):
    class Arguments:
        password = graphene.String(required=True)
        password_2 = graphene.String(required=True)
        token = graphene.String(required=True)

    @classmethod
    def perform_mutate(cls, root, info, *args, **kwargs):
        password = kwargs.get('password')
        password_2 = kwargs.get('password_2')
        token = kwargs.get('token')

        if password != password_2:
            raise MutationValidationError(ErrorCode.CONFIRM_PASSWORD_DOES_NOT_MATCH)

        try:
            validate_password(password)
        except DjangoValidationError as e:
            raise MutationValidationError(ErrorCode.WEAK_PASSWORD, messages=e.messages)

        try:
            valid_token = SetPasswordToken.objects.get(token=token)
        except SetPasswordToken.DoesNotExist:
            raise MutationValidationError(ErrorCode.SET_PASSWORD_INVALID_TOKEN)

        try:
            user = CustomUser.objects.get(email=valid_token.email)
        except CustomUser.DoesNotExist:
            raise MutationValidationError(ErrorCode.OBJECT_DOES_NOT_EXIST)

        user.set_password(password)

        return cls.create_login_response(user)


class Login(BaseMutation, CreateLoginResponseMixin):
    class Arguments:
        email = graphene.String(required=True)
        password = graphene.String(required=True)

    @classmethod
    def perform_mutate(cls, root, info, *args, **kwargs):
        email = kwargs.get('email')
        password = kwargs.get('password')

        try:
            user = CustomUser.objects.get(email=email)
        except CustomUser.DoesNotExist:
            raise MutationValidationError(ErrorCode.OBJECT_DOES_NOT_EXIST)

        if not user.check_password(password):
            raise MutationValidationError(ErrorCode.WRONG_PASSWORD)

        return cls.create_login_response(user)


class Mutations(graphene.ObjectType):
    submit_email = SubmitEmail.Field(description="Submit email and create token for registration")
    set_password = SetPassword.Field(description="Set password for user, with valid set password token")
    login = Login.Field()
