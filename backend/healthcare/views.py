from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.http import HttpResponse
from .models import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
import json
from .serializers import *
from .serializers import RegisterParamedicSerializer, HealthcareSPSerializer, GetAllDemands, GetAllAppointments
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.db.models import Q
from django.shortcuts import render, redirect

from geopy import distance

# Create your views here.
@api_view(['POST'])
def Paramedic_id_API(request):
    if(request.method == 'POST'):
        serializer = ParamedicID(data=request.data)
        print(serializer)
        if serializer.is_valid():
            user1 = User.objects.get(username=serializer.data['username'])
            Paramedics = Paramedic.objects.get(user=user1)
            Patients = Patient.objects.filter(related_param=Paramedics)
            # data = Patients.username
            # print(data)
            # for items in Patients:
            #     print(items)
            #     print(items['user_id'])
            data = []
            for items in Patients:
                data.append({
                    "user": items.user.username,
                    "mobile": items.mobile,
                    "pincode": items.pincode,
                    "related_param": items.related_param.user.username,
                    # "medical_hist": items.medical_hist
                })

            # print(Patients)
            # jsonstr1 = list(Patients.values())
            # print(jsonstr1)
            return Response(data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Create your views here.
# from django.contrib.auth.models import User
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from rest_framework import status
# from .serializers import
# from .models import *


@api_view(['POST'])
def register_para(request):
    if(request.method == 'POST'):
        ser = RegisterParamedicSerializer(data=request.data)
        if ser.is_valid():
            usr_set = User.objects.filter(username=ser.data['username'])
            if usr_set.exists():
                resp = {"Status": "Bad Request. Username exists"}
                return Response(resp, status=status.HTTP_400_BAD_REQUEST)
            else:
                rel_user = User.objects.create_user(
                    ser.data['username'], ser.data['email'], ser.data['password'])
                rel_user.first_name = ser.data['first_name']
                rel_user.last_name = ser.data['last_name']
                rel_user.save()
                Paramedic.objects.create(
                    user=rel_user, mobile=ser.data['mobile'])

                resp = {"Status": "Successfully added paramedic", "Success":'true'}
                return Response(resp, status=status.HTTP_201_CREATED)
        else:
            resp = {"Status": "Bad Request"}
            return Response(resp, status=status.HTTP_400_BAD_REQUEST)


# @csrf_exempt
@api_view(['POST'])
def get_all_demands(request):
    if(request.method == 'POST'):
        ser = GetAllDemands(data=request.data)
        if ser.is_valid():
            param_id = ser.data['username']
            rel_user = User.objects.get(username=param_id)
            paramedic_ = Paramedic.objects.get(user=rel_user)
            demands = Demand.objects.filter(paramedic=paramedic_)
            jsonstr1 = list(demands.values())
            print(jsonstr1)
            resp = {"demands": jsonstr1}
            return Response(resp, status=200)
        else:
            print(ser.errors)
            resp = {"Status": "Bad Request"}
            return Response(resp, status=status.HTTP_400_BAD_REQUEST)


# @csrf_exempt
@api_view(['POST'])
def get_all_appointments(request):
    if(request.method == 'POST'):
        ser = GetAllAppointments(data=request.data)
        if ser.is_valid():
            hc_id = ser.data['username']
            hc_id1 = User.objects.get(username=hc_id)
            hc_id2 = HealthcareSP.objects.get(user=hc_id1)
            appointments = Appointment.objects.filter(healthcaresp=hc_id2)
            jsonstr1 = list(appointments.values())
            print(jsonstr1)
            resp = {"appointements": jsonstr1}
            return Response(resp, status=200)
        else:
            print(ser.errors)
            resp = {"Status": "Bad Request"}
            return Response(resp, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def register_HealthcareSP(request):
    if(request.method == "POST"):
        ser = HealthcareSPSerializer(data=request.data)
        if ser.is_valid():
            use_list = User.objects.filter(username=ser.data['username'])
            print(use_list)
            if use_list.exists() == False:
                rel_user = User.objects.create_user(
                    ser.data['username'], ser.data['email'], ser.data['password'])
                print(rel_user)
                rel_user.first_name = ser.data['first_name']
                rel_user.last_name = ser.data['last_name']
                rel_user.save()
                HealthcareSP.objects.create(
                    user=rel_user, mobile=ser.data['mobile'], pincode=ser.data['pincode'], specialization=ser.data['specialization'])
                resp = {"Status": "Successfully added hcsp", "Success": 'true'}
                return Response(resp, status=status.HTTP_201_CREATED)
            else:
                resp = {"Status": "Username already in use"}
                return Response(resp, status=status.HTTP_400_BAD_REQUEST)
        else:
            resp = {"Status": "Bad Request"}
            return Response(resp, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def all_demands_hcsp(request):
    demands = Demand.objects.all()
    json1 = list(demands.values())
    return Response(json1)


@api_view(['POST'])
def save_demand(request):
    if(request.method == "POST"):
        ser = savedemandsofpatient(data=request.data)
        if ser.is_valid():
            patient_list = User.objects.get(
                username=ser.data['patient_username'])
            paramedic_list = User.objects.get(
                username=ser.data['paramedic_username'])
            print(patient_list, paramedic_list)
            if (patient_list and paramedic_list):
                patient1 = Patient.objects.get(user=patient_list)
                paramedic1 = Paramedic.objects.get(user=paramedic_list)
                print(patient1)
                print(paramedic1)
                new_demand = Demand.objects.create(
                    patient=patient1, paramedic=paramedic1, res_req=ser.data['res_req'], criticality=ser.data['criticality'], is_open=ser.data['is_open'])
                # rel_user.save()
                print(new_demand)
                resp = {"Status": "Successfully added hcsp"}
                return Response(resp, status=status.HTTP_201_CREATED)
            else:
                resp = {"Status": "Wrong Patient or Paramedic details"}
                return Response(resp, status=status.HTTP_400_BAD_REQUEST)
        else:
            resp = {"Status": "Bad Request"}
            return Response(resp, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def Paramedic_id_API_demands(request):
    if(request.method == 'POST'):
        serializer = ParamedicID(data=request.data)
        print(serializer)
        if serializer.is_valid():
            user1 = User.objects.get(username=serializer.data['username'])
            Paramedics = Paramedic.objects.get(user=user1)
            Demands = Demand.objects.filter(paramedic=Paramedics)
            print(Demands.values())
            data = []
            for items in Demands:
                # patient1 = Patient.objects.get(id=items.patient_id)
                # paramedic1 = Paramedic.objects.get(id=items.paramedic_id)
                # user3 = User.objects.get(username=patient1.user.username)
                # user2 = User.objects.get(username=paramedic1.user.username)
                data.append({
                    "id": items.id,
                    "patient_name": items.patient.user.username,
                    "paramedic_name": items.paramedic.user.username,
                    "res_req": items.res_req,
                    "criticality": items.criticality,
                    "is_open": items.is_open
                })

            # data = Patients.username
            # print(data)
            # for items in Patients:
            #     print(items)
            #     print(items['user_id'])
            print(Demands)
            # jsonstr1 = list(Demands.values())
            print(data)
            return Response(data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def login(request):
    if(request.method == 'POST'):
        ser = LoginSerializer(data=request.data)
        if(ser.is_valid()):
            user1 = authenticate(
                username=ser.data['username'], password=ser.data['password'])
            if user1 is not None:
                user_typ = ser.data['user_type']
                if user_typ == "paramedic":
                    param_set = Paramedic.objects.filter(user=user1)
                    if(param_set.exists()):
                        resp = {"Status": "Authenticated"}
                        return Response(resp, status=status.HTTP_200_OK)
                    else:
                        resp = {"Status": "Failure"}
                        return Response(resp, status=status.HTTP_400_BAD_REQUEST)
                elif user_typ == "hcsp":
                    hcsp_set = HealthcareSP.objects.filter(user=user1)
                    if(hcsp_set.exists()):
                        resp = {"Status": "Authenticated"}
                        return Response(resp, status=status.HTTP_200_OKAY)
                    else:
                        resp = {"Status": "Failure"}
                        return Response(resp, status=status.HTTP_400_BAD_REQUEST)
                elif user_typ == "admin":
                    admin_set = DakshasAdmin.objects.filter(user=user1)
                    if(admin_set.exists()):
                        resp = {"Status": "Authenticated"}
                        return Response(resp, status=status.HTTP_200_OKAY)
                    else:
                        resp = {"Status": "Failure"}
                        return Response(resp, status=status.HTTP_400_BAD_REQUEST)
                else:
                    resp = {"Status": "Invalid User Type"}
                    return Response(resp, status=status.HTTP_400_BAD_REQUEST)
            # A backend authenticated the credentials
            else:
                resp = {"Status": "Invalid Credentials"}
                return Response(resp, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def all_demands_hcsp(request):
    demands = Demand.objects.filter(is_open=True)
    json1 = list(demands.values())
    return Response(json1)


@api_view(['POST'])
def pending_appointments(request):
    if(request.method == 'POST'):
        serializer = HealthCareID(data=request.data)
        if serializer.is_valid():
            user1 = User.objects.get(username=serializer.data['username'])
            hcsp = HealthcareSP.objects.get(user=user1)
            appointments = Appointment.objects.filter(
                is_confirmed="pending", healthcaresp=hcsp)
            json1 = list(appointments.values())
            return Response(json1)


@api_view(['POST'])
def accept_reject_appointments(request):
    if(request.method == 'POST'):
        serializer = Appointment_A_R_Serializer(data=request.data)
        if serializer.is_valid():
            appointment = Appointment.objects.get(id=serializer.data['id'])
            if(serializer.data['a_r'] == 0):
                appointment.is_confirmed = "rejected"
            else:
                appointment.is_confirmed = "accepted"
            appointment.save()
            resp = {"Status": "Successfully modified appointment."}
            return Response(resp, status=status.HTTP_201_CREATED)
        else:
            resp = {"Status": "Bad Request"}
            return Response(resp, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def register_patient(request):
    if(request.method == "POST"):
        ser = RegisterPatientSerializer(data=request.data)
        if ser.is_valid():
            # patient_list = User.objects.get(
            #     username=ser.data['patient_username'])
            # paramedic_list = User.objects.get(
            #     username=ser.data['paramedic_username'])
            usr_list = User.objects.filter(username = ser.data['param_username'])
            if usr_list:
                rel_param = User.objects.get(username = ser.data['param_username'])
                rel_param = Paramedic.objects.get(user=rel_param)
                mobile1 = ser.data['mobile']
                blood_grp1 = ser.data['blood_grp']
                pincode1 = ser.data['pincode']
                pat_user = User.objects.create(username = ser.data['patient_username'], password = 'dummy_password1')
                Patient.objects.create(user = pat_user, mobile = mobile1, blood_grp = blood_grp1, pincode = pincode1, related_param = rel_param)

                # new_demand = Demand.objects.create(
                #     patient=patient1, paramedic=paramedic1, res_req=ser.data['res_req'], criticality=ser.data['criticality'], is_open=ser.data['is_open'])
                # # rel_user.save()
                # print(new_demand)
                resp = {"Status": "Successfully added patient"}
                return Response(resp, status=status.HTTP_201_CREATED)
            else:
                resp = {"Status": "Inavlid paramedic username"}
                return Response(resp, status=status.HTTP_400_BAD_REQUEST)
            # else:
            #     resp = {"Status": "Wrong Patient or Paramedic details"}
            #     return Response(resp, status=status.HTTP_400_BAD_REQUEST)
        else:
            resp = {"Status": "Bad Request"}
            return Response(resp, status=status.HTTP_400_BAD_REQUEST)