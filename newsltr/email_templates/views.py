from drf_spectacular.utils import extend_schema
from rest_framework.generics import (CreateAPIView, GenericAPIView,
                                     ListAPIView, RetrieveUpdateDestroyAPIView)

from campaigns.permissions import IsMemberOfWorkspace
from email_templates.models import EmailTemplate
from email_templates.serializers import EmailTemplateSerializer
from payments.permissions import IsSubscriptionActive


class EmailTemplatesViewBase(GenericAPIView):
    permission_classes = [IsMemberOfWorkspace & IsSubscriptionActive]
    serializer_class = EmailTemplateSerializer
    queryset = EmailTemplate.objects.all()
    lookup_field = "campaign__id"
    lookup_url_kwarg = "campaign_id"


@extend_schema(tags=["email templates"])
class EmailTemplatesListView(EmailTemplatesViewBase, ListAPIView):
    ...


@extend_schema(tags=["email templates"])
class EmailTemplatesCreateView(EmailTemplatesViewBase, CreateAPIView):
    ...


@extend_schema(tags=["email templates"])
class EmailTemplatesGetUpdateDeleteView(
    EmailTemplatesViewBase, RetrieveUpdateDestroyAPIView
):
    lookup_field = "pk"
    lookup_url_kwarg = "template_id"

    def get_queryset(self):
        campaign_id = self.kwargs.get("campaign_id")
        return EmailTemplate.objects.filter(campaign_id=campaign_id)
