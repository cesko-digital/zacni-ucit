from django.contrib.auth.models import AbstractUser
from django.db import models
from django_extensions.db.models import TimeStampedModel
import uuid


class CustomUser(AbstractUser):
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    email = models.EmailField("Email", unique=True)

    @classmethod
    def create_unactivated_user(cls, email: str):
        cls.objects.get_or_create(
            email=email,
            is_active=False,
            defaults={
                'password': str(uuid.uuid4())
            }
        )
        token, _ = SetPasswordToken.objects.get_or_create(
            email=email,
            defaults={
                'token': str(uuid.uuid4())
            }
        )
        # TODO create url for frontend which will be passed into email context
        registration_url = f'https://random.com/?registration_token={token}'
        # TODO send email with generated


# TODO Should we add cron which will periodically removing old RegistrationTokens?
class SetPasswordToken(TimeStampedModel):
    token = models.CharField(max_length=256, verbose_name='Token pro registraci')
    email = models.EmailField('Email', unique=True)
