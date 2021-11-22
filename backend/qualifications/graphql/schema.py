import graphene
from django.db.models import Prefetch

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

from teaching.models import SubjectGroup, Subject, SchoolLevel

from colleges.models import Course


class CustomDictionary(graphene.ObjectType):
    # klíč slosvníku a hodnota (jejich názvy budou string)
    path = graphene.String()
    uncompleted_education_types = graphene.String()


class Dictionary(graphene.ObjectType):
    # klíč - objekt Qualification, hodnota - list objektů EducationType
    path = graphene.Field(QualificationObjectType)
    uncompleted_education_types = graphene.List(EducationTypeObjectType)


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

    # Qualification type queries (dictionary)
    qualifications = graphene.List(
        Dictionary,
        subject_id=graphene.Int(required=True),
        level_id=graphene.Int(required=True),
        title=graphene.Int(required=True),
        specialization=graphene.Int(required=True),
        school_level_done=graphene.Int(required=False),
        subject_done=graphene.Int(required=False),
    )

    qualification = graphene.Field(QualificationObjectType, pk=graphene.Int(required=True))

    # Courses queries
    courses = graphene.List(
        CourseObjectType, edu_type_id=graphene.Int(required=True), subject_id=graphene.Int(required=True)
    )
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
        subject_done=None,
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

        if subject_done:
            subject_user = Subject.objects.get(id=subject_done)
            subject_group_done = subject_user.subject_group.id
        else:
            subject_group_done = False

        titles = []
        title_user = Title.objects.get(id=title)
        titles.append(title_user.id)

        # pokud má uživatel Mgr., má i Bc dané specializace
        if title_user.name == "Magisterské vzdělání (Mgr. nebo Ing.)":
            title_bc = Title.objects.get(name="Bakalářské vzdělání")
            titles.append(title_bc.id)

        # pokud má uživatel specializaci Umění (neučitelský obor), bere se to
        # jako Jiná neučitelská odborná specialzace
        if specialization == EducationSpecialization.objects.get(name="Umění (neučitelský obor)").id:
            specialization = EducationSpecialization.objects.get(name="Jiná neučitelská odborná specializace").id

        for path in paths:

            completed_edu_types = []
            uncompleted_edu_types = []

            for edu_type in path.cached_education_types:

                if edu_type.qualification_type.name == "Titul":
                    # Ověřuje, zda má uživatel titul a zároveň kvalifikaci na stupeň, kde chce učit
                    if (
                        edu_type.title.id in titles
                        and edu_type.specializations.all().filter(id=specialization).exists()
                    ):

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

                        elif (
                            specialization == EducationSpecialization.objects.get(name="Učitelství").id
                            and school_level_done == SchoolLevel.objects.get(name="1. stupeň ZŠ").id
                        ):
                            subject_group_done = SubjectGroup.objects.get(name="všeobecně-vzdělávací předměty").id

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
                            # pokud není určená předmětová skupina, ale je určený school level (mateřská škola)
                            if edu_type.school_levels.all().exists():
                                if edu_type.school_levels.all().filter(id=school_level_done).exists():
                                    completed_edu_types.append(edu_type)
                                else:
                                    uncompleted_edu_types.append(edu_type)
                            # není school level ani předmětová skupina
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
                # přidání tuple (cesta, počet nesplněných EducationTypes, konkrétní nesplněné EducationTypes)
                partially_completed_paths.append((path, len(uncompleted_edu_types), uncompleted_edu_types))
            else:
                fully_uncompleted_paths.append((path, len(uncompleted_edu_types), uncompleted_edu_types))

        if len(completed_paths) > 0:
            # má splněno
            return {}

        elif len(partially_completed_paths) > 0:
            # seřazení cest podle počtu nesplněných education types
            partially_completed_paths = sorted(partially_completed_paths, key=lambda x: x[1])

            # vytvoření seznamu z objektů Qualification
            partially_compl_paths = [x[0] for x in partially_completed_paths]

            # vytvoření seznamu z objektů nesplněných EducationTypes
            uncompleted_education_types = [x[2] for x in partially_completed_paths]

            results = []
            # vytvoření seznamu slovníků
            for i in range(len(partially_compl_paths)):
                dictionary = Dictionary(partially_compl_paths[i], uncompleted_education_types[i])
                results.append(dictionary)
            return results

        else:
            uncompleted_paths = sorted(fully_uncompleted_paths, key=lambda x: x[1])
            uncompl_paths = [x[0] for x in uncompleted_paths]
            uncompleted_education_types = [x[2] for x in uncompleted_paths]

            results = []
            for j in range(len(uncompl_paths)):
                dictionary = Dictionary(uncompl_paths[j], uncompleted_education_types[j])
                results.append(dictionary)
            return results

    @staticmethod
    def resolve_courses(root, info, edu_type_id, subject_id):

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

        if edu_type.title is not None:
            qs = qs.filter(title=edu_type.title.id)

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
            # filtruje na základě konkrétního předmětu, který chce uživatel učit
            qs = qs.filter(subjects=subject_id)
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
