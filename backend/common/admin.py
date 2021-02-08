from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User
from .models import GraphModel


class GraphAdmin:
    """
    Take care about synchronisation of data in graph DB -- every create, update and delete
    operation is propagated also to Neo4j.
    """

    def save_model(self, request, obj, form, change):
        out = super().save_model(request, obj, form, change)
        if isinstance(obj, GraphModel):
            obj.graph_save()
        return out

    def delete_model(self, request, obj):
        if isinstance(obj, GraphModel):
            obj.graph_delete()
        return super().delete_model(request, obj)

    def delete_queryset(self, request, queryset):
        for obj in queryset:
            obj.graph_delete()
        return super().delete_queryset(request, queryset)


admin.site.register(User, UserAdmin)
