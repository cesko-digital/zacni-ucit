import graphene
from common.mutations import BaseMutation, MutationValidationError
from qualifications.models import EducationArea


class UpdateCollegeAreaName(BaseMutation):
    college_area = graphene.Field(CollegeAreaObjectType)

    class Arguments:
        name = graphene.String(required=True)
        pk = graphene.Int(required=True)

    @classmethod
    def mutate(cls, root, info, **kwargs):
        name = kwargs.get("name")
        pk = kwargs.get("pk")
        try:
            college_area = EducationArea.objects.get(pk=pk)
        except EducationArea.DoesNotExist:
            message = "College Area with selected ID does not exists"
            raise MutationValidationError(ErrorCode.OBJECT_DOES_NOT_EXIST, message=message, data=pk)
        else:
            college_area.name = name
            college.save(update_fields=["name"])

        return cls(ok=True, college_area=college_area)


class Mutations(graphene.ObjectType):
    update_college_area_name = UpdateCollegeAreaName.Field(description="Mutation for updating college areas")
