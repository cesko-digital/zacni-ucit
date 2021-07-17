from django.contrib import admin
from .models import Subject, SchoolLevel, SchoolSubType, SchoolType, SubjectGroup


class SubjectAdmin(admin.ModelAdmin):
    list_display = ("name", "code")


class SchoolLevelAdmin(admin.ModelAdmin):
    list_display = ("name",)


class SchoolSubTypeAdmin(admin.ModelAdmin):
    list_display = ("name", "type")
    list_filter = ("type",)


class SchoolTypeAdmin(admin.ModelAdmin):
    list_display = ("name",)


class SubjectGroupAdmin(admin.ModelAdmin):
    list_display = ("name",)
    list_filter = ("subjects",)
    filter_horizontal = ("subjects",)


admin.site.register(Subject, SubjectAdmin)
admin.site.register(SchoolLevel, SchoolLevelAdmin)
admin.site.register(SchoolSubType, SchoolSubTypeAdmin)
admin.site.register(SchoolType, SchoolTypeAdmin)
admin.site.register(SubjectGroup, SubjectGroupAdmin)
