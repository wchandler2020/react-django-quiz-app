from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Question, Answer
from .serializers import QuestionSerializer, AnswerSerializer
from rest_framework.decorators import action

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    @action(detail=True, methods=['POST'])
    def rate_question(self, request, pk=None):
        response = {"message": "it is working"}
        return Response(response, status=status.HTTP_202_ACCEPTED)

class AnswerViewSet(viewsets.ModelViewSet):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer

