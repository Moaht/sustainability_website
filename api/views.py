from django.shortcuts import render
from .models import User, Monster
from .serializers import UserSerializer, MonsterSerializer
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
    

# class TodoListApiView(APIView):
#     # add permission to check if user is authenticated
#     permission_classes = [IsAuthenticated]

#     # 1. List all
#     def get(self, request, *args, **kwargs):
#         '''
#         List all the todo items for given requested user
#         '''
#         # collection = Monster.objects.filter(user = request.user.id)
#         user = User.objects.filter(user = request.token.id)
#         serializer = TodoSerializer(todos, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)

#     # 2. Create
#     def post(self, request, *args, **kwargs):
#         '''
#         Create the Todo with given todo data
#         '''
#         data = {
#             'task': request.data.get('task'), 
#             'completed': request.data.get('completed'), 
#             'user': request.user.id
#         }
#         serializer = TodoSerializer(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)

#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CollectionView(APIView):
    """
    Gets a collection of monsters by user id
    """
    permission_classes = IsAuthenticated,

    @staticmethod
    def get(request: Request) -> Response:

        # Gets string from header
        auth_header = request.META.get('HTTP_AUTHORIZATION').split()

        # Checks if it contains a token
        if len(auth_header) != 2 or auth_header[0].lower() != 'token':
            raise ValidationError('No token')

        # Checks if token exists in database
        if not Token.objects.filter(key=auth_header[1]):
            raise ValidationError('Invalid token')

        # Gets user id from token
        user = Token.objects.get(key=auth_header[1]).user_id

        # Gets all monsters for user
        monsters = Monster.objects.all().filter(user_id=user)

        # Creates JSON data
        collection = []
        for monster in monsters:
            collection.append({
                'monster': {
                    'type': {
                        'name': monster.type.name,
                        'description': monster.type.description,
                        'picture': monster.type.picture
                    },
                    'obtained': monster.obtained
                }
            })
        
        return Response({'collection': collection}, status=status.HTTP_200_OK)

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