# Generated by Django 3.0.5 on 2020-04-05 21:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='language_choices',
            field=models.CharField(choices=[('Programming Basics', 'Programming Basics'), ('C#', 'C#'), ('Javascript', 'Javascript'), ('Python', 'Python'), ('Ruby', 'Ruby'), ('PHP', 'PHP')], default='Programming Basics', max_length=100),
        ),
        migrations.AddField(
            model_name='question',
            name='solution',
            field=models.TextField(default=1, max_length=2000),
            preserve_default=False,
        ),
    ]
