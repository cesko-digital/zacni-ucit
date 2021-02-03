from django.contrib.auth.models import User, Group, Permission

from qualifications.temp import init_map_2021_01, init_education_type
from teaching.temp import init_subjects_2021_01, init_school_type_2021_02, init_school_level_2021_02


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
                "add_schooltype",
                "change_schooltype",
                "delete_schooltype",
                "view_schooltype",
                "add_subjectgroup",
                "change_subjectgroup",
                "delete_subjectgroup",
                "view_subjectgroup",
            ]
        )
    )

    qs = User.objects.filter(username="demo")
    if not User.objects.filter(username="demo").exists():
        user = User.objects.create_user(username="demo", email="demo@zacniucit.cz", password="demo")
    else:
        user = qs.get()
    user.is_staff = True
    user.groups.add(group)
    user.save()


def init():
    init_user()
    init_subjects_2021_01()
    init_map_2021_01()
    init_education_type()
    init_school_type_2021_02()
    init_school_level_2021_02()
