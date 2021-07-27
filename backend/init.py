import os
from django.apps import apps
from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group, Permission
from django.core import management
from common.models import GraphModel
from qualifications.temp import init_map_2021_01, init_subject_types, init_other_options, init_qualification
from colleges.temp import init_courses_2021_01
from colleges.temp2 import (
    init_courses,
    add_missing_language_school,
    add_missing_institute_of_lifelong_learning,
    add_missing_subjects,
)
from teaching.temp import (
    init_subjects_2021_01,
    init_school_type_2021_02,
    init_school_level_2021_02,
)


def init_user():
    group, _ = Group.objects.get_or_create(name="editors")
    group.permissions.add(
        *Permission.objects.filter(
            codename__in=[
                "add_college",
                "change_college",
                "delete_college",
                "view_college",
                "add_faculty",
                "change_faculty",
                "delete_faculty",
                "view_faculty",
                "add_collegearea",
                "change_collegearea",
                "delete_collegearea",
                "view_collegearea",
                "add_collegeprogramme",
                "change_collegeprogramme",
                "delete_collegeprogramme",
                "view_collegeprogramme",
                "add_course",
                "change_course",
                "delete_course",
                "view_course",
                "add_subject",
                "change_subject",
                "delete_subject",
                "view_subject",
                "add_educationtype",
                "change_educationtype",
                "delete_educationtype",
                "view_educationtype",
                "add_title",
                "change_title",
                "delete_title",
                "view_title",
                "add_schoollevel",
                "change_schoollevel",
                "delete_schoollevel",
                "view_schoollevel",
                "add_schoolsubtype",
                "change_schoolsubtype",
                "delete_schoolsubtype",
                "view_schoolsubtype",
                "add_schooltype",
                "change_schooltype",
                "delete_schooltype",
                "view_schooltype",
                "add_subjectgroup",
                "change_subjectgroup",
                "delete_subjectgroup",
                "view_subjectgroup",
                "add_educationarea",
                "change_educationarea",
                "delete_educationarea",
                "view_educationarea",
                "add_subjecttype",
                "change_subjecttype",
                "delete_subjecttype",
                "view_subjecttype",
                "add_otheroption",
                "change_otheroption",
                "delete_otheroption",
                "view_otheroption",
            ]
        )
    )

    User = get_user_model()
    qs = User.objects.filter(username="demo")
    if not User.objects.filter(username="demo").exists():
        user = User.objects.create_user(username="demo", email="demo@zacniucit.cz", password="demo")
    else:
        user = qs.get()
    user.is_staff = True
    user.groups.add(group)
    user.save()


def import_colleges(path="temp/vs.xlsx"):
    if not os.path.exists(path):
        print(f"Initial college XLSX file not found on {path} path")
        return
    management.call_command("import_msmt_college_registry", path)


def init_neo4j():
    models = [i._meta.label for i in apps.get_models() if issubclass(i, GraphModel)]
    management.call_command("graph_sync", *models)


def init():
    init_user()
    init_subjects_2021_01()
    init_map_2021_01()
    init_courses_2021_01()
    init_subject_types()
    init_other_options()
    init_school_type_2021_02()
    init_school_level_2021_02()
    init_qualification()
    import_colleges()
    if neo4j:
        init_neo4j()
    import_colleges()
    init_school_level_2021_02()
    add_missing_subjects()
    init_courses()
    init_education_type()
    init_other_options()
    init_school_type_2021_02()
    add_missing_language_school()
    add_missing_institute_of_lifelong_learning()
