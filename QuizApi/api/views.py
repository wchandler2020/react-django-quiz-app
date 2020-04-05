from rest_framework import viewsets, status
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from .models import Question, Answer
from .serializers import QuestionSerializer, AnswerSerializer, UserSerializer
from rest_framework.decorators import action
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated, AllowAny

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (AllowAny,)

    @action(detail=True, methods=['POST'])
    def rate_question(self, request, pk=None):
        if "stars" in request.data:
            question = Question.objects.get(id=pk)
            stars = request.data["stars"]
            #user = request.user
            user = User.objects.get(id=1)
            print("question: ", user.username)
 
            response = {"message": "it is working"}
            return Response(response, status=status.HTTP_202_ACCEPTED)
        else:
            response = {"message": "Please provide a star rating"}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)
class AnswerViewSet(viewsets.ModelViewSet):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer

