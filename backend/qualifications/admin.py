from django.contrib import admin
from .models import CollegeArea, CollegeProgramme, EducationType, Title


class CollegeAreaAdmin(admin.ModelAdmin):
    list_display = ("name",)


class CollegeProgrammeAdmin(admin.ModelAdmin):
    list_display = ("name", "area")
    list_select_related = ("area",)
    list_filter = ("area", "subjects")
    fields = ("area", "name", "subjects")
    filter_horizontal = ("subjects",)


class EducationTypeAdmin(admin.ModelAdmin):
    list_display = ("education", "qualification")
    list_filter = ("qualification",)
    search_fields = ("education",)


class TitleAdmin(admin.ModelAdmin):
    list_display = ("name", "shortcut")


admin.site.register(CollegeArea, CollegeAreaAdmin)
admin.site.register(CollegeProgramme, CollegeProgrammeAdmin)
admin.site.register(EducationType, EducationTypeAdmin)
admin.site.register(Title, TitleAdmin)
