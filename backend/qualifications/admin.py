from django.contrib import admin
from .models import (
    CollegeArea,
    CollegeProgramme,
    EducationType,
    Title,
    EducationSpecialization,
    SubjectType,
    OtherExperience,
    Qualification,
    QualificationType,
)


class CollegeAreaAdmin(admin.ModelAdmin):
    list_display = ("name",)


class CollegeProgrammeAdmin(admin.ModelAdmin):
    list_display = ("name", "area")
    list_select_related = ("area",)
    list_filter = ("area", "subjects")
    fields = ("area", "name", "subjects")
    filter_horizontal = ("subjects",)


class EducationTypeAdmin(admin.ModelAdmin):
    list_display = ("id", "qualification_type", "title", "get_school_levels", "get_subject_groups", 
            "get_specializations", "name")
    list_filter = ("qualification_type", "title", "school_levels", "subject_groups")
    search_fields = ("qualification_type", "title__name", "school_levels__name")
    list_select_related = ("title",)
    filter_horizontal = ("school_levels",)


class TitleAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "code",
    )


class QualificationAdmin(admin.ModelAdmin):
    list_display = ("id", "row_id", "school_level", "get_subject_groups", "get_education_types")
    list_filter = ("subject_groups", "school_level", "education_types__title", "education_types__specializations")


class QualificationTypeAdmin(admin.ModelAdmin):
    list_display = ("name",)

    
class EducationSpecializationAdmin(admin.ModelAdmin):
    list_display = ("name",)


class PreparationTypeAdmin(admin.ModelAdmin):
    list_display = ("name",)


class SubjectTypeAdmin(admin.ModelAdmin):
    list_display = ("name",)


class OtherExperienceAdmin(admin.ModelAdmin):
    list_display = ("name",)


admin.site.register(CollegeArea, CollegeAreaAdmin)
admin.site.register(CollegeProgramme, CollegeProgrammeAdmin)
admin.site.register(EducationType, EducationTypeAdmin)
admin.site.register(Title, TitleAdmin)
admin.site.register(EducationSpecialization, EducationSpecializationAdmin)
admin.site.register(SubjectType, SubjectTypeAdmin)
admin.site.register(OtherExperience, OtherExperienceAdmin)
admin.site.register(Qualification, QualificationAdmin)
admin.site.register(QualificationType, QualificationTypeAdmin)
