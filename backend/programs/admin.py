from django.contrib import admin

from .models import Subject, Course


class SubjectAdmin(admin.ModelAdmin):
    list_display = ("name", "code")


class CourseAdmin(admin.ModelAdmin):
    list_display = ("name", "display_faculty", "display_college")
    list_select_related = ("faculty", "faculty__college")
    list_filter = ("faculty__college", "subjects")
    fields = ("name", "faculty", "price", "sds", "form_present", "form_combined", "subjects", "url", "note")
    filter_horizontal = ("subjects",)

    def display_faculty(self, obj):
        return obj.faculty.name

    display_faculty.short_description = "Fakulta"

    def display_college(self, obj):
        return obj.faculty.college.code

    display_college.short_description = "Vysoká škola"


admin.site.register(Subject, SubjectAdmin)
admin.site.register(Course, CourseAdmin)
