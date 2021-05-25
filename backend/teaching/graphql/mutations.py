import graphene

from colleges.graphql.types import CourseObjectType
from common.mutations import BaseMutation
from colleges.models import Course
from teaching.graphql.types import AchievedTitlesInputType


class NeedToStudyMutation(BaseMutation):
    courses = graphene.List(CourseObjectType)

    class Arguments:
        school_level_ids_to_teach = graphene.List(graphene.Int)
        subjects_ids_to_teach = graphene.List(graphene.Int)
        achieved_titles = graphene.List(AchievedTitlesInputType)
        studied_courses_ids = graphene.List(graphene.Int)
        other_option_ids = graphene.List(graphene.Int)

    @classmethod
    def perform_mutate(cls, root, info, **kwargs):
        # TODO add cypher query for and filter courses based on result
        courses = Course.objects.all()
        return cls(ok=True, courses=courses)


class Mutations(graphene.ObjectType):
    need_to_study = NeedToStudyMutation.Field(
        description="Mutation for fetching courses, which user need to study to became a teacher"
    )
