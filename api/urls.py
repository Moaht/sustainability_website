from django.urls import path
from . import views
from rest_framework import routers
# urlpatterns = [
#     # path('api/', views.UserListCreate.as_view()),
#     path('api/', views.UserListCreate.as_view()),

# ]

router = routers.SimpleRouter()

router.register(r'api', viewset=views.UserListCreate)
router.register(r'signup', viewset=views.UserListCreate)
urlpatterns = []
urlpatterns += router.urls

