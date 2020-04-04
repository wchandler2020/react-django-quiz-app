from django.urls import path
from rest_framework import routers
from django.conf.urls import include
from .views import QuestionViewSet, AnswerViewSet

router = routers.DefaultRouter()
router.register('questions', QuestionViewSet)
router.register('answers', AnswerViewSet)

urlpatterns = [
    path("", include(router.urls)),
]

