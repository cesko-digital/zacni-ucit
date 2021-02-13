from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _


class CustomUser(AbstractUser):
    USERNAME_FIELD = EMAIL_FIELD = "email"
    REQUIRED_FIELDS = []

    email = models.EmailField(_("email address"), unique=True)

    class Meta:
        db_table = "auth_user"
