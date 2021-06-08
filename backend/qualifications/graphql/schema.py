import graphene
from qualifications.graphql.types import (
    TitleObjectType,
    CollegeAreaObjectType,
    CollegeProgrammeObjectType,
    EducationAreaObjectType,
    PreparationTypeObjectType,
    SubjectTypeObjectType,
    EducationTypeObjectType,
    OtherOptionObjectType,
)
from qualifications.models import (
    Title,
    CollegeArea,
    CollegeProgramme,
    EducationArea,
    SubjectType,
    OtherOption,
)


class Query(graphene.ObjectType):
    # Titles queries
    titles = graphene.List(TitleObjectType)
    title = graphene.Field(TitleObjectType, pk=graphene.Int(required=True))

    # College areas queries
    college_areas = graphene.List(CollegeAreaObjectType)
    college_area = graphene.Field(CollegeAreaObjectType, pk=graphene.Int(required=True))

    # College Programme queries
    college_programmes = graphene.List(CollegeProgrammeObjectType)
    college_programme = graphene.Field(CollegeProgrammeObjectType, pk=graphene.Int(required=True))

    # Education area queries
    education_areas = graphene.List(EducationAreaObjectType)
    education_area = graphene.Field(EducationAreaObjectType, pk=graphene.Int(required=True))

    # Subject type queries
    subject_types = graphene.List(SubjectTypeObjectType)
    subject_type = graphene.Field(SubjectTypeObjectType, pk=graphene.Int(required=True))

    # Education type queries
    education_types = graphene.List(EducationTypeObjectType)
    education_type = graphene.Field(EducationTypeObjectType, pk=graphene.Int(required=True))

    # Other option queries
    other_options = graphene.List(OtherOptionObjectType)
    other_option = graphene.List(OtherOptionObjectType, pk=graphene.Int(required=True))

    @staticmethod
    def resolve_titles(root, info):
        return Title.objects.all()

    @staticmethod
    def resolve_title(root, info, pk: int):
        return Title.objects.get(pk=pk)

    @staticmethod
    def resolve_college_areas(root, info):
        return CollegeArea.objects.all()

    @staticmethod
    def resolve_collage_area(root, info, pk: int):
        return CollegeArea.objects.get(pk=pk)

    @staticmethod
    def resolve_college_programmes(root, info):
        return CollegeProgramme.objects.all()

    @staticmethod
    def resolve_college_programme(root, info, pk: int):
        return CollegeProgramme.objects.get(pk=pk)

    @staticmethod
    def resolve_education_areas(root, info):
        return EducationArea.objects.all()

    @staticmethod
    def resolve_education_area(root, info, pk: int):
        return EducationArea.objects.get(pk=pk)

    @staticmethod
    def resolve_subject_types(root, info):
        return SubjectType.objects.all()

    @staticmethod
    def resolve_subject_type(root, info, pk: int):
        return SubjectType.objects.get(pk=pk)

    @staticmethod
    def resolve_education_types(root, info):
        return SubjectType.objects.all()

    @staticmethod
    def resolve_education_type(root, info, pk: int):
        return SubjectType.objects.get(pk=pk)

    @staticmethod
    def resolve_other_options(root, info):
        return OtherOption.objects.all()

    @staticmethod
    def resolve_other_option(root, info, pk: int):
        return OtherOption.objects.get(pk=pk)
