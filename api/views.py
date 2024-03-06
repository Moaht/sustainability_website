from django.shortcuts import render
from .models import User
from .serializers import UserSerializer
from rest_framework.viewsets import GenericViewSet, ViewSet, ModelViewSet
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework.exceptions import ValidationError
from rest_framework.schemas import ManualSchema, coreapi as coreapi_schema
from rest_framework import status, parsers, renderers
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.compat import coreapi, coreschema

class UserListCreate(GenericViewSet):
    """
    For creating a new api.User instance in the database
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def create(self, request: Request) -> Response:
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'success': True}, status=status.HTTP_201_CREATED)

class HelloView(APIView):
    """
    For testing built-in DRF authorisation and authentication
    """
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        content = {'message': 'Hello, World!'}
        return Response(content)

class LogoutView(APIView):
    """
    Deletes token from database thus 'logging out'
    """
    permission_classes = IsAuthenticated,

    @staticmethod
    def delete(request: Request) -> Response:
        auth_header = request.META.get('HTTP_AUTHORIZATION').split()

        if len(auth_header) != 2 or auth_header[0].lower() != 'token':
            raise ValidationError('No token')

        # Checks if key exists in database
        if not Token.objects.filter(key=auth_header[1]):
            raise ValidationError('Invalid token')

        # Deletes token
        Token.objects.get(key=auth_header[1]).delete()

        return Response({'success': True}, status=status.HTTP_200_OK)
    
# class ObtainAuthToken(APIView):
#     """
#     Generates a token for authorisation/authentication
#     """
#     throttle_classes = ()
#     permission_classes = ()
#     parser_classes = (parsers.FormParser, parsers.MultiPartParser, parsers.JSONParser,)
#     renderer_classes = (renderers.JSONRenderer,)
#     serializer_class = AuthTokenSerializer

#     if coreapi_schema.is_enabled():
#         schema = ManualSchema(
#             fields=[
#                 coreapi.Field(
#                     name="username",
#                     required=True,
#                     location='form',
#                     schema=coreschema.String(
#                         title="Username",
#                         description="Valid username for authentication",
#                     ),
#                 ),
#                 coreapi.Field(
#                     name="password",
#                     required=True,
#                     location='form',
#                     schema=coreschema.String(
#                         title="Password",
#                         description="Valid password for authentication",
#                     ),
#                 ),
#             ],
#             encoding="application/json",
#         )

#     def get_serializer_context(self):
#         return {
#             'request': self.request,
#             'format': self.format_kwarg,
#             'view': self
#         }

#     def get_serializer(self, *args, **kwargs):
#         kwargs['context'] = self.get_serializer_context()
#         return self.serializer_class(*args, **kwargs)

#     def post(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         user = serializer.validated_data['user']
#         token, created = Token.objects.get_or_create(user=user)
#         return Response({'token': token.key})