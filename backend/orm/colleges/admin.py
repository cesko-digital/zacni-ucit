from django.contrib import admin
from .models import College, Faculty


class FacultyInline(admin.TabularInline):
    model = Faculty
    extra = 0


class CollegeAdmin(admin.ModelAdmin):
    list_display = ("code",)
    inlines = [FacultyInline]


class FacultyAdmin(admin.ModelAdmin):
    list_display = ("name", "college", "town")
    list_select_related = ("college",)
    list_filter = ("college",)
    fields = ("college", "name", "town")


admin.site.register(College, CollegeAdmin)
admin.site.register(Faculty, FacultyAdmin)
