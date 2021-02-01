import graphene

from colleges.graphql.types import CollegeType
from zacniucit.core.choices import ErrorCode
from zacniucit.core.mutations import BaseMutation, MutationValidationError
from colleges.models import College


class UpdateCollegeName(BaseMutation):
    college = graphene.Field(CollegeType)

    class Arguments:
        name = graphene.String(required=True)
        pk = graphene.Int(required=True)

    @classmethod
    def perform_mutate(cls, root, info, **kwargs):
        pk = kwargs.get('pk')
        name = kwargs.get('name')
        try:
            college = College.objects.get(pk=pk)
        except College.DoesNotExist:
            message = 'College with selected ID does not exists'
            raise MutationValidationError(ErrorCode.OBJECT_DOES_NOT_EXIST, message=message, data=pk)
        else:
            college.name = name
            college.save(update_fields=['name'])

        return cls(ok=True, college=college)


class Mutations(graphene.ObjectType):
    update_college_name = UpdateCollegeName.Field(description='Mutation for updating colleges names')
