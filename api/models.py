from django.db import models
from django.contrib.auth.models import AbstractUser, UserManager

# Currently just ensures that user:username checks are case-insensitive (for registration etc)
class CustomUserManager(UserManager):
    def get_by_natural_key(self, username):
        username_attr = '{}__iexact'.format(self.model.USERNAME_FIELD)
        return self.get(**{username_attr: username})

class User(AbstractUser):
    objects = CustomUserManager()
    email_confirmed = models.BooleanField(default=False)
    def __unicode__(self):
        return self.username
