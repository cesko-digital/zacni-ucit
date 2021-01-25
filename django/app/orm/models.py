from django.db import models

class SchoolLevel(models.Model):
    id = models.IntField()
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name

class SubjectCategory(models.Model):
    id = models.IntField()
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name
