from .models import *
from rest_framework import serializers
from django.contrib.auth.models import User


class ParamedicID(serializers.Serializer):
    username = serializers.CharField()


class RegisterParamedicSerializer(serializers.Serializer):
    # user_type = serializers.CharField()
    username = serializers.CharField()
    password = serializers.CharField()
    email = serializers.CharField()
    first_name = serializers.CharField(allow_blank=True, allow_null=True)
    last_name = serializers.CharField(allow_blank=True, allow_null=True)
    mobile = serializers.CharField()


class HealthcareSPSerializer(serializers.Serializer):
    # user_type = serializers.CharField()
    username = serializers.CharField()
    password = serializers.CharField()
    email = serializers.CharField()
    first_name = serializers.CharField(allow_blank=True, allow_null=True)
    last_name = serializers.CharField(allow_blank=True, allow_null=True)
    mobile = serializers.CharField()
    pincode = serializers.CharField()
    specialization = serializers.CharField()


class savedemandsofpatient(serializers.Serializer):
    # user_type = serializers.CharField()
    patient_username = serializers.CharField()
    paramedic_username = serializers.CharField()
    res_req = serializers.CharField()
    criticality = serializers.CharField()
    is_open = serializers.BooleanField()


class LoginSerializer(serializers.Serializer):
    user_type = serializers.CharField()
    username = serializers.CharField()
    password = serializers.CharField()

# class LoginHCSPSerializer(serializers.Serializer):
#     # user_type = serializers.CharField()
#     username = serializers.CharField()
#     password = serializers.CharField()


class GetAllDemands(serializers.Serializer):
    username = serializers.CharField()


class GetAllAppointments(serializers.Serializer):
    username = serializers.CharField()


class HealthCareID(serializers.Serializer):
    username = serializers.CharField()


class Appointment_A_R_Serializer(serializers.Serializer):
    id = serializers.CharField()
    a_r = serializers.CharField()

class RegisterPatientSerializer(serializers.Serializer):
    param_username = serializers.CharField()
    patient_username = serializers.CharField()
    mobile = serializers.CharField()
    blood_grp = serializers.CharField()
    pincode = serializers.CharField()
