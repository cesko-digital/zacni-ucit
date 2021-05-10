import graphene
from colleges.graphql.types import CollegeObjectType, FacultyObjectType, CourseObjectType
from colleges.models import College, Faculty, Course


class Query(graphene.ObjectType):
    # Colleges queries
    colleges = graphene.List(CollegeObjectType)
    college = graphene.Field(CollegeObjectType, pk=graphene.Int(required=True))

    # Faculties queries
    faculties = graphene.List(FacultyObjectType)
    faculty = graphene.Field(FacultyObjectType, pk=graphene.Int(required=True))

    # Courses queries
    courses = graphene.List(CourseObjectType)
    course = graphene.Field(CourseObjectType, pk=graphene.Int(required=True))

    @staticmethod
    def resolve_colleges(root, info):
        return College.objects.all()

    @staticmethod
    def resolve_college(root, info, pk: int):
        return College.objects.get(pk=pk)

    @staticmethod
    def resolve_faculties(root, info):
        return Faculty.objects.all()

    @staticmethod
    def resolve_faculty(root, info, pk: int):
        return College.objects.get(pk=pk)

    @staticmethod
    def resolve_courses(root, info):
        return Course.objects.all()

    @staticmethod
    def resolve_course(root, info, pk: int):
        return Course.objects.get(pk=pk)
