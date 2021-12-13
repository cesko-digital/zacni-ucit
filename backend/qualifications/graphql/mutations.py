import graphene
from common.mutations import BaseMutation, MutationValidationError
from common.choices import ErrorCode
from qualifications.models import EducationSpecialization
from qualifications.graphql.types import CollegeAreaObjectType
from django.core.mail import EmailMessage
import re


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
            college_area = EducationSpecialization.objects.get(pk=pk)
        except EducationSpecialization.DoesNotExist:
            message = "College Area with selected ID does not exists"
            raise MutationValidationError(ErrorCode.OBJECT_DOES_NOT_EXIST, message=message, data=pk)
        else:
            college_area.name = name
            college.save(update_fields=["name"])

        return cls(ok=True, college_area=college_area)


class SendResults(BaseMutation):
    class Arguments:
        to_email = graphene.String(required=True)
        url = graphene.String(required=True)

    @classmethod
    def mutate(cls, root, info, **kwargs):
        to_email = kwargs.get("to_email")
        url = kwargs.get("url")
        email_regex = re.compile(r"[^@]+@[^@]+\.[^@]+")
        if not email_regex.match(to_email):
            raise MutationValidationError(ErrorCode.INVALID_EMAIL_ADDRESS)
        else:
            message = EmailMessage(to=[to_email], from_email="notifications@cesko.digital")
            message.template_id = "d-f85ac6e5e50847e3acdc455f1ca3b154"
            message.merge_global_data = {"url": url}
            message.send()

            return cls(ok=True)


class Mutations(graphene.ObjectType):
    update_college_area_name = UpdateCollegeAreaName.Field(description="Mutation for updating college areas")
    send_results = SendResults.Field(description="Mutation for sending emails with recommended courses")
