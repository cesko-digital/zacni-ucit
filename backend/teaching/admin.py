from django.contrib import admin
from common.admin import GraphAdmin
from .models import Subject, SchoolLevel, SchoolSubType, SchoolType, SubjectGroup


class SubjectAdmin(GraphAdmin, admin.ModelAdmin):
    list_display = ("name", "code")


class SchoolLevelAdmin(GraphAdmin, admin.ModelAdmin):
    list_display = ("name",)


class SchoolSubTypeAdmin(GraphAdmin, admin.ModelAdmin):
    list_display = ("name", "type")
    list_filter = ("type",)


class SchoolTypeAdmin(GraphAdmin, admin.ModelAdmin):
    list_display = ("name",)


class SubjectGroupAdmin(GraphAdmin, admin.ModelAdmin):
    list_display = ("name",)
    list_filter = ("subjects",)
    filter_horizontal = ("subjects",)


admin.site.register(Subject, SubjectAdmin)
admin.site.register(SchoolLevel, SchoolLevelAdmin)
admin.site.register(SchoolSubType, SchoolSubTypeAdmin)
admin.site.register(SchoolType, SchoolTypeAdmin)
admin.site.register(SubjectGroup, SubjectGroupAdmin)
