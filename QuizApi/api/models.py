from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator



class Question(models.Model):
    LANGUAGE_CHOICES = [
        ('Programming Basics', 'Programming Basics'),
        ('C#', 'C#'),
        ('Javascript', 'Javascript'),
        ('Python', 'Python'),
        ('Ruby', 'Ruby'),
        ('PHP', 'PHP'),
    ]
    question = models.CharField(max_length=200)
    solution = models.TextField(max_length=2000)
    language_choices = models.CharField(max_length=100, choices=LANGUAGE_CHOICES, default='Programming Basics')

    def __str__(self):
        return self.question

class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    answer = models.TextField(max_length=2000)
    comment = models.TextField(max_length=2000)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    stars = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])

    class Meta:
        unique_together = (('user', 'question'), )
        index_together = (('user', 'question'), )