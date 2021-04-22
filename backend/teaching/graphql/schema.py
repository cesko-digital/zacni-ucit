import graphene

from colleges.graphql.types import CourseObjectType
from colleges.models import Course
from teaching.graphql.types import SchoolLevelObjectType, SubjectObjectType
from teaching.models import SchoolLevel, Subject


class Query(graphene.ObjectType):
    school_levels = graphene.List(SchoolLevelObjectType)
    subjects = graphene.List(SubjectObjectType, school_level_ids=graphene.List(graphene.Int, required=False))
    need_to_study = graphene.List(
        CourseObjectType,
        school_level_ids=graphene.List(graphene.Int),
        subjects_ids=graphene.List(graphene.Int),
        title_ids=graphene.List(graphene.Int),
        college_programme_ids=graphene.List(graphene.Int, required=False),
        college_area_ids=graphene.List(graphene.Int, required=False),
        education_area_ids=graphene.List(graphene.Int, required=False),
        preparation_type_ids=graphene.List(graphene.Int, required=False),
        subjects_type_ids=graphene.List(graphene.Int, required=False),
        education_type_ids=graphene.List(graphene.Int, required=False),
        other_option_ids=graphene.List(graphene.Int, required=False),
    )

    @staticmethod
    def resolve_school_levels(root, info):
        return SchoolLevel.objects.all()

    @staticmethod
    def resolve_subjects(root, info, school_level_ids: list = None):
        if school_level_ids:
            return Subject.objects.filter(school_levels__id__in=school_level_ids).distinct()
        return Subject.objects.all()

    @staticmethod
    def resolve_need_to_study(
        root,
        info,
        school_level_ids: list,
        subjects_ids: list,
        title_ids: list,
        college_programme_ids: list = None,
        college_area_ids: list = None,
        education_area_ids: list = None,
        preparation_type_ids: list = None,
        subjects_type_ids: list = None,
        other_option_ids: list = None,
    ):
        # TODO add cypher query for and filter courses based on result
        return Course.objects.all()
