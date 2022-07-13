from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('all_patients/', views.Paramedic_id_API, name="ParamedicID"),
    path('register_param/', views.register_para, name="register_paramedic"),
    path('register_hcsp/', views.register_HealthcareSP, name="register_hcsp"),
    path('demands/', views.save_demand, name="savedemand"),
    path('all_demands/', views.Paramedic_id_API_demands, name="ParamedicIDdemands"),
    path('login/', views.login, name="login_vw"),
    path('alldemands/', views.get_all_demands, name="alldemands"),
    path('allappointments/', views.get_all_appointments, name="allappointments"),
    path('all_demands_hcsp/', views.all_demands_hcsp, name="all_demands_hcsp"),
    path('pending_appointments/', views.pending_appointments,name="pending_appointments"),
    path('accept_reject_appointments/', views.accept_reject_appointments,name="accept_reject_appointments"),
    path('registerpatient', views.register_patient, name="regpa"),
]
# path('all_demands_hcsp/',views.all_demands_hcsp, name = "all_demands_hcsp"),
#     path('pending_appointments/',views.pending_appointments, name = "pending_appointments"),
#     path('accept_reject_appointments/',views.accept_reject_appointments, name = "accept_reject_appointments"),
