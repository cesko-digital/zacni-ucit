from django.contrib import admin
from .models import CollegeArea, CollegeProgramme


class CollegeAreaAdmin(admin.ModelAdmin):
    list_display = ("name",)


class CollegeProgrammeAdmin(admin.ModelAdmin):
    list_display = ("name", "area")
    list_select_related = ("area",)
    list_filter = ("area", "subjects")
    fields = ("area", "name", "subjects")
    filter_horizontal = ("subjects",)


admin.site.register(CollegeArea, CollegeAreaAdmin)
admin.site.register(CollegeProgramme, CollegeProgrammeAdmin)
