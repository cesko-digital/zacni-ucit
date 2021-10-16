import graphene
import pandas as pd
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
        area=graphene.Int(required=True),
    )
    qualification = graphene.Field(QualificationObjectType, pk=graphene.Int(required=True))

    # Courses queries
    courses = graphene.List(CourseObjectType)
    course = graphene.Field(CourseObjectType, pk=graphene.Int(required=True))

    @staticmethod
    def resolve_qualifications(
        root,
        info,
        subject_id,
        level_id,
        title,
        area,
        school_level_done=None,
        subject_group_done=None,
    ):

        # vytvoreni jednotlivych cest
        paths = Qualification.objects.prefetch_related('education_types')

        # nebo zkusit
        # paths = EducationType.objects.prefetch_related('qualification_set')

        # vyfiltrovani jednotlivych cest na zaklade user inputu
        paths = paths.filter(
            subject_groups__id=Subject.objects.get(pk=subject_id).subject_group.id, school_level=level_id
        )

        # prevedeni na pandas a pridani sloupce completed do kazde EduType na zaklade user inputu
        df = pd.DataFrame(paths)

        for index, row in df.iterrows():
            for edu_type in row["education_types"]:

                # overuje, zda uzivatel ma titul
                if edu_type["qualification_type"] == "titul":

                    # overuje, zda ma titul a zaroven kvalifikaci na ten stupen, kde chce ucit
                    if edu_type["title"] == title and edu_type["area"] == area:

                        # overuje, zda ma zadanou predmetovou skupinu
                        if edu_type["subject_group"]:

                            # overuje, zda ma vystudovanou predmetovou skupinu
                            if edu_type["subject_group"] == subject_group_done:

                                # overuje, zda ma titul a predmetovou skupinu pro dany stupen, kde chce ucit
                                if edu_type["school_levels"]:

                                    # pokud ma titul a zaroven specializaci a zaroven predmetovou skupinu udelanou a
                                    # zaroven pro dany stupen, kde chce ucit
                                    if edu_type["school_levels"] == school_level_done:
                                        edu_type["completed"] = True

                                    # pokud nema predmetovou skupinu pro dany stupen
                                    else:
                                        edu_type["completed"] = False

                                # pokud nema predmetovou skupinu pro dany stupen
                                else:
                                    edu_type["completed"] = True

                            # pokud ma nejakou predmetovou skupinu, ale ne tu, kterou potrebuje
                            else:
                                edu_type["completed"] = False

                        # pokud ma titul, ale nema predmetovou skupinu
                        else:
                            edu_type["completed"] = True

                    # pokud nema zadny titul
                    else:
                        edu_type["completed"] = False

        # vsechny relevantni sloupce pro danou EduType do json sloupce
        for index, row in df.iterrows():
            for edu_type in row["education_types"]:
                columns = edu_type.loc[
                          :0,  # check
                          "qualification_type",
                          "title",
                          "specialization",
                          "school_levels",
                          "completed",
                          ]
                json = columns.to_json()
                edu_type["edu_type_json"] = json

        # vyvoreni sloupce EduTypes list pro kazdou cestu
        for index, row in df.iterrows():
            row["edu_type_list"] = []
            for edu_type in row["education_types"]:
                if not edu_type["edu_type_json"]["completed"]:
                    row["edu_type_list"].append(edu_type["edu_type_json"])

        # df.groupby("row_id") - neni treba?

        # pridani sloupce, ktery pocita pocet EduTypes pro kazdou cestu
        for index, row in df.iterrows():
            num = len(row["edu_type_list"])
            row["edu_count"] = num

        # serazeni cest podle sloupce count
        df = df.sort_values(by="edu_count", ascending=True)
        list_of_df_paths = df.values.tolist()

        return list_of_df_paths

    @staticmethod
    def resolve_courses(root, info, subject_id, level_id, title, area, school_level_done=None, subject_group_done=None):

        # na základě user inputu uloží vhodné cesty do proměné
        paths = root.resolve_qualifications(
            # info?
            subject_id,
            level_id,
            title,
            area,
            school_level_done,
            subject_group_done,
        )

        relevant_courses = []

        # projde dané cesty a kurzy splňující parametry přidá do seznamu
        for path in paths:
            path_courses = []
            for json in path["edu_type_list"]:
                courses = Course.objects.filter(
                    qualification_type=json.qualification_type,
                    title=json.title,
                    school_levels=json.school_levels,
                    education_specialization=json.specialization,
                )
                path_courses.append(courses)
            relevant_courses.append(path_courses)

        return relevant_courses

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
