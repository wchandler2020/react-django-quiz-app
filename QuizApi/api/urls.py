from django.urls import path
from rest_framework import routers
from django.conf.urls import include
from .views import QuestionViewSet, AnswerViewSet, UserViewSet

router = routers.DefaultRouter()
router.register('questions', QuestionViewSet)
router.register('answers', AnswerViewSet)
router.register('users', UserViewSet)

urlpatterns = [
    path("", include(router.urls)),
]

