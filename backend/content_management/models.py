from django.db import models


class WebSiteText(models.Model):
    page_id = models.CharField(max_length=255)
    text_element_id = models.CharField(max_length=255)
    text = models.TextField()
