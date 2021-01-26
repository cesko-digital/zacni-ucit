from django.contrib.auth.models import User, Group, Permission

from colleges.temp import init_faculties_2021_01
from maps.temp import init_map_2021_01
from rvp.temp import init_subjects_2021_01, init_courses_2021_01


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
    init_faculties_2021_01()
    init_courses_2021_01()
    init_map_2021_01()
