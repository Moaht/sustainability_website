from rest_framework import serializers
from django.db import transaction
from django.contrib.auth import get_user_model
from rest_framework.exceptions import ValidationError

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id', 'username', 'first_name', 'last_name', 'email', 'password')

    @staticmethod
    def validate_username(value):
        """
        Makes sure to disregard case when checking usernames
        """
        try:
            user = get_user_model().objects.get_by_natural_key(value)
        except get_user_model().DoesNotExist:
            return value
        else:
            raise ValidationError("A user with that username already exists.")

    @staticmethod
    def validate_password(value):
        """
        Checks if the password entered by the user fulfils certain criteria
        """
        if len(value) < 6:
            raise ValidationError('The password entered is too short.')
        return value
    
    # @staticmethod
    # def validate_email(value):
    #     """
    #     Checks if the password entered by the user fulfils certain criteria
    #     """

    @transaction.atomic
    def create(self, validated_data):
        """
        Takes validated POST data and creates an api.User instance
        """
        password = validated_data.pop('password')

        instance = self.Meta.model(**validated_data)
        instance.set_password(password)
        instance.save()

        return instance
