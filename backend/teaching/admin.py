from django.contrib import admin
from common.admin import GraphAdmin
from .models import Subject, SchoolLevel, SchoolType, SubjectGroup


class SubjectAdmin(GraphAdmin, admin.ModelAdmin):
    list_display = ("name", "code")


class SchoolLevelAdmin(GraphAdmin, admin.ModelAdmin):
    list_display = ("name",)


class SchoolTypeAdmin(GraphAdmin, admin.ModelAdmin):
    list_display = ("name",)


class SubjectGroupAdmin(GraphAdmin, admin.ModelAdmin):
    list_display = ("name",)
    list_filter = ("subjects",)
    filter_horizontal = ("subjects",)


admin.site.register(Subject, SubjectAdmin)
admin.site.register(SchoolLevel, SchoolLevelAdmin)
admin.site.register(SchoolType, SchoolTypeAdmin)
admin.site.register(SubjectGroup, SubjectGroupAdmin)
