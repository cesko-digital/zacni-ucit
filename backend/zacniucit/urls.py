from django.contrib import admin
from django.urls import path

from common.views import homepage


urlpatterns = [path("", homepage, name="homepage"), path("admin/", admin.site.urls)]
