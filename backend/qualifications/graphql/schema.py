import graphene
import pandas as pd
import numpy as np

from qualifications.graphql.types import (
    TitleObjectType,
    CollegeAreaObjectType,
    CollegeProgrammeObjectType,
    EducationAreaObjectType,
    PreparationTypeObjectType,
    SubjectTypeObjectType,
    EducationTypeObjectType,
    OtherExperienceObjectType,
    QualificationObjectType,
    SubjectGroupObjectType,
)
from qualifications.models import (
    Title,
    CollegeArea,
    CollegeProgramme,
    EducationArea,
    SubjectType,
    EducationType,
    OtherExperience,
    Qualification,
)
from teaching.models import SubjectGroup


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

    # Other experience queries
    other_experiences = graphene.List(OtherExperienceObjectType)
    other_experience = graphene.Field(OtherExperienceObjectType, pk=graphene.Int(required=True))

    # Subject group queries
    subject_groups = graphene.List(SubjectGroupObjectType)
    subject_group = graphene.Field(SubjectGroupObjectType, pk=graphene.Int(required=True))

    # Qualification type queries
    qualifications = graphene.List(QualificationObjectType)
    qualification = graphene.Field(QualificationObjectType, pk=graphene.Int(required=True))

    @staticmethod
    def resolve_qualifications(root, info, subject, school_level, title, area, czv, other_experience, school_level_done=None, subject_group_done=None):

        # query na vyfiltrovani cest + join s education types
        subject_group = SubjectGroup.objects.filter(subject__name=subject)
        paths = Qualification.objects.filter(subject_group=subject_group, school_level=school_level).prefetch_related(
            "education_types".values()
        )

        # prevedeni na pandas a pridani sloupce completed do kazde EduType na zaklade user inputu
        df = pd.DataFrame(paths)
        for index, row in df.iterrows():
            for edu_type in row["education_types"]:

                if edu_type["qualification_type"] == "titul":
                    if edu_type["title"] == title and (edu_type["area"] == area or edu_type["area"] == "Any"):
                        if edu_type["subject_group"]:
                            if edu_type["subject_group"] == subject_group_done or edu_type["subject_group"] == "Any":
                                if edu_type["school_levels"]:
                                    if edu_type["school_levels"] == school_level_done or edu_type["school_levels"] == "Any":
                                        edu_type["completed"] = True
                                    else:
                                        edu_type["completed"] = False
                                else:
                                    edu_type["completed"] = True
                            else:
                                edu_type["completed"] = False                     
                        else:
                            edu_type["completed"] = True
                    else:
                        edu_type["completed"] = False
                
                if edu_type["qualification_type"] == "czv":
                    if edu_type["name"] == czv:
                        edu_type["completed"] = True
                    else:
                        edu_type["completed"] = False

                if edu_type["qualification_type"] == "Další zkušenost":
                    if edu_type["name"] == other_experience:
                        edu_type["completed"] = True
                    else:
                        edu_type["completed"] = False

        # vsechny relevantni sloupce pro danou EduType do json sloupce
        for index, row in df.iterrows():
            for edu_type in row["education_types"]:
                columns = df.loc[:0, "name", "title", "area", "subject_group", "school_levels", "completed"] # check :0
                json = columns.to_json()  
                edu_type["edu_type_json"] = json

        # vyvoreni sloupce EduTypes list pro kazdou cestu
        # chybi grouby
        for index, row in df.iterrows():
            row["edu_type_list"] = []
            for edu_type in row["education_types"]:
                if edu_type["completed"] == False:
                    row["edu_type_list"].append(edu_type["edu_type_json"])

        # pridani sloupce, ktery pocita pocet EduTypes pro kazdou cestu
        for index, row in df.iterrows():
            num = len(row["edu_type_list"])
            row["count"] = num

        # serazeni cest podle sloupce count
        df = df.sort_values(by="count", ascending=True)

        return df

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
