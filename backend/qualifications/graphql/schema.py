import graphene
from django.db.models import Prefetch
import numpy as np

from qualifications.graphql.types import (
    TitleObjectType,
    CollegeAreaObjectType,
    CollegeProgrammeObjectType,
    EducationSpecializationObjectType,
    SubjectTypeObjectType,
    EducationTypeObjectType,
    OtherExperienceObjectType,
    QualificationObjectType,
    SubjectGroupObjectType,
)

from colleges.graphql.types import CourseObjectType

from qualifications.models import (
    Title,
    CollegeArea,
    CollegeProgramme,
    EducationSpecialization,
    SubjectType,
    EducationType,
    OtherExperience,
    Qualification,
)

from teaching.models import SubjectGroup, Subject

from colleges.models import Course


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
    education_areas = graphene.List(EducationSpecializationObjectType)
    education_area = graphene.Field(EducationSpecializationObjectType, pk=graphene.Int(required=True))

    # Subject type queries
    subject_types = graphene.List(SubjectTypeObjectType)
    subject_type = graphene.Field(SubjectTypeObjectType, pk=graphene.Int(required=True))

    # Education type queries
    education_types = graphene.List(EducationTypeObjectType)
    education_type = graphene.Field(EducationTypeObjectType, pk=graphene.Int(required=True))

    # Other experience queries
    other_experiences = graphene.List(OtherExperienceObjectType)
    other_experience = graphene.Field(OtherExperienceObjectType, pk=graphene.Int(required=True))

    # Subject group queries
    subject_groups = graphene.List(SubjectGroupObjectType)
    subject_group = graphene.Field(SubjectGroupObjectType, pk=graphene.Int(required=True))

    # Qualification type queries
    qualifications = graphene.List(
        QualificationObjectType,
        subject_id=graphene.Int(required=True),
        level_id=graphene.Int(required=True),
        title=graphene.Int(required=True),
        specialization=graphene.Int(required=True),
        school_level_done=graphene.Int(required=False),
        subject_group_done=graphene.Int(required=False),
    )
    qualification = graphene.Field(QualificationObjectType, pk=graphene.Int(required=True))

    # Courses queries
    courses = graphene.List(CourseObjectType, edu_type_id=graphene.Int(required=True))
    course = graphene.Field(CourseObjectType, pk=graphene.Int(required=True))

    @staticmethod
    def resolve_qualifications(
        root,
        info,
        subject_id,
        level_id,
        title,
        specialization,
        school_level_done=None,
        subject_group_done=None,
    ):

        # vytvoreni jednotlivych cest
        paths = Qualification.objects.prefetch_related(Prefetch("education_types", to_attr="cached_education_types"))

        # vyfiltrovani jednotlivych cest na zaklade user inputu
        paths = paths.filter(
            subject_groups__id=Subject.objects.get(pk=subject_id).subject_group.id, school_level=level_id
        )

        completed_paths = []
        partially_completed_paths = []
        fully_uncompleted_paths = []
        for path in paths:

            completed_edu_types = []
            uncompleted_edu_types = []

            for edu_type in path.cached_education_types:

                if edu_type.qualification_type.name == "Titul":

                    # Ověřuje, zda m áuživatel titul a zároveň kvalifikaci na stupeň, kde chce učit
                    if edu_type.title.id == title and edu_type.specializations.all().filter(id=specialization).exists():
                        # vazba specializace Filologie(neučitelský obor) na hotovou subject group
                        if (
                            specialization
                            == EducationSpecialization.objects.get(name="Filologie (neučitelský obor)").id
                        ):
                            subject_group_done = SubjectGroup.objects.get(name="cizí jazyk").id

                        # vazba specializace "Tělesná výchova a sport (neučitelský obor)" na hotovou subject group
                        elif (
                            specialization
                            == EducationSpecialization.objects.get(name="Tělesná výchova a sport (neučitelský obor)").id
                        ):
                            subject_group_done = SubjectGroup.objects.get(name="tělesná výchova").id

                        elif specialization == EducationSpecialization.objects.get(name="Umělecko-pedagogický obor").id:
                            subject_group_done = SubjectGroup.objects.get(name="umělecké předměty").id

                        # má education type nějakou předmětovou skupinu?
                        if edu_type.subject_groups.all().exists():

                            # ověřuje, zda má uživatel vystudovanou danou přdmětovou skupinu
                            if edu_type.subject_groups.all().filter(id=subject_group_done).exists():

                                # Má education type dané nějaké school levels?
                                if edu_type.school_levels.all().exists():

                                    # pokud ma uzivatel titul, zaroven specializaci a zaroven predmetovou skupinu udelanou a
                                    # zaroven pro dany stupen, kde chce ucit - má splněný education type
                                    if edu_type.school_levels.all().filter(id=school_level_done).exists():
                                        completed_edu_types.append(edu_type)

                                    # pokud nemá předmětovou skupinu pro daný Stupeň
                                    else:
                                        uncompleted_edu_types.append(edu_type)

                                # pokud není určený stupeň pro edu type
                                else:
                                    completed_edu_types.append(edu_type)

                            # nemá správnou předmětovou skupinu
                            else:
                                uncompleted_edu_types.append(edu_type)
                        # pokud není určená předmětová skupina pro daný Titul
                        else:
                            completed_edu_types.append(edu_type)
                    # pokud uživatel nemá titul a požadovAnou specializaci
                    else:
                        uncompleted_edu_types.append(edu_type)
                else:
                    uncompleted_edu_types.append(edu_type)

            if len(completed_edu_types) == len(path.cached_education_types):
                completed_paths.append(path)
            elif len(uncompleted_edu_types) < len(path.cached_education_types):
                partially_completed_paths.append((path, len(uncompleted_edu_types)))
            else:
                fully_uncompleted_paths.append((path, len(uncompleted_edu_types)))

        if len(completed_paths) > 0:
            # má splněno
            pass

        elif len(partially_completed_paths) > 0:
            partially_completed_paths = sorted(partially_completed_paths, key=lambda x: x[1])
            partially_completed_paths = [x[0].id for x in partially_completed_paths]
            queryset = Qualification.objects.filter(id__in=partially_completed_paths)
            return sorted(queryset, key=lambda x: partially_completed_paths.index(x.id))

        else:
            uncompleted_paths = sorted(fully_uncompleted_paths, key=lambda x: x[1])
            uncompleted_paths = [x[0].id for x in uncompleted_paths]
            queryset = Qualification.objects.filter(id__in=uncompleted_paths)
            return sorted(queryset, key=lambda x: uncompleted_paths.index(x.id))

    @staticmethod
    def resolve_courses(root, info, edu_type_id):

        # získání EducationType na základě id
        edu_type = EducationType.objects.get(id=edu_type_id)

        # vyfiltrování kurzů podle qualification type (nenabývá hodnot None)
        qs = Course.objects.filter(
            qualification_type=edu_type.qualification_type.id,
        )

        # pokud existují specializace pro daný edu_type
        if edu_type.specializations.all().exists():
            edu_type_specializations = edu_type.specializations.all()
            # získání seznamu id pro filtrování
            edu_type_specializations_id = [x.id for x in edu_type_specializations]
            qs = qs.filter(education_specialization__in=edu_type_specializations_id)

        # if edu_type.title is not None:
        #     qs = qs.filter(title=edu_type.title.id)
        #     print("mají titul", qs)

        if edu_type.school_levels.all().exists():
            edu_type_school_levels = edu_type.school_levels.all()
            edu_type_school_levels_id = [x.id for x in edu_type_school_levels]
            qs = qs.filter(school_levels__in=edu_type_school_levels_id)

        if edu_type.subject_groups.all().exists():

            edu_type_subject_groups = edu_type.subject_groups.all()
            # získání subject group id od education type, aby se dále mohlo porovnávat
            edu_type_subject_groups_id = [x.id for x in edu_type_subject_groups]

            # převedení querysetu na list
            courses_list = list(qs)

            for course in courses_list:
                courses_subjects = course.subjects.all()
                courses_subject_groups_id = set([x.subject_group.id for x in courses_subjects])
                # získání id předmětových skupin od kurzů
                courses_subject_groups_id = list(courses_subject_groups_id)

                # porovnání, jestli kurzy mají předmětové skupiny, které odpovídají subject group v education type
                for c_id in courses_subject_groups_id:
                    count = 0
                    for id in courses_subject_groups_id:
                        if id in edu_type_subject_groups_id:
                            count += 1
                    # pokud nejsou všechny předmětové skupiny kurzu v seznamu
                    # předmětových skupin education type - vyřadí kurz z querysetu
                    if count != len(courses_subject_groups_id):
                        qs = qs.exclude(id=course.id)
        return qs

    @staticmethod
    def resolve_titles(root, info):
        return Title.objects.filter(visible_in_form=True)

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
        return EducationSpecialization.objects.all()

    @staticmethod
    def resolve_education_area(root, info, pk: int):
        return EducationSpecialization.objects.get(pk=pk)

    @staticmethod
    def resolve_subject_types(root, info):
        return SubjectType.objects.all()

    @staticmethod
    def resolve_subject_type(root, info, pk: int):
        return SubjectType.objects.get(pk=pk)

    @staticmethod
    def resolve_education_types(root, info):
        return EducationType.objects.all()

    @staticmethod
    def resolve_education_type(root, info, pk: int):
        return EducationType.objects.get(pk=pk)

    @staticmethod
    def resolve_other_options(root, info):
        return OtherExperience.objects.all()

    @staticmethod
    def resolve_other_option(root, info, pk: int):
        return OtherExperience.objects.get(pk=pk)
