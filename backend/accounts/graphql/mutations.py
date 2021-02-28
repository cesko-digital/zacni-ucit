import graphene
from graphql_auth import mutations
from graphql_auth.utils import get_token
from graphql_auth.constants import TokenAction

from django.core.mail import EmailMessage
from django.conf import settings

from accounts.models import CustomUser


class CustomRegister(mutations.Register):

    @classmethod
    def resolve_mutation(cls, root, info, **kwargs):
        email = kwargs.get("email")
        response = super(CustomRegister, cls).resolve_mutation(root, info, **kwargs)

        if response.success:
            user = CustomUser.objects.get(email=email)
            set_password_token = get_token(user, TokenAction.PASSWORD_RESET, **kwargs)
            message = EmailMessage(to=[email], from_email=settings.DEFAULT_FROM_EMAIL)
            message.template_id = settings.SET_EMAIL_TEMPLATE_ID
            message.merge_global_data = {
                'jmeno': 'TODO_REMOVE_THIS_OR_FORCE_ADDING_NAME_TO_REGISTRATION',
                'activation_url': f"{settings.BASE_FRONTED_URL}/password-set/{set_password_token}",
                'odesilatel': settings.DEFAULT_FROM_EMAIL
            }
            message.send()

        return response


class Mutations(graphene.ObjectType):
    register = CustomRegister.Field()
    password_set = mutations.PasswordSet.Field()
    login = mutations.ObtainJSONWebToken.Field()
    update_account = mutations.UpdateAccount.Field()
    revoke_token = mutations.RevokeToken.Field()
    refresh_token = mutations.RefreshToken.Field()
