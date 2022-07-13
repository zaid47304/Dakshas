# from django.db import models
# from django.conf import settings
# from django.utils import timezone

# Create your models here.
from django.db import models
from django.conf import settings
from django.utils import timezone
from django.contrib.auth.models import User

# CRITICALITY_CHOICES = [

# ]

# Create your models here.

# class User(AbstractUser):
#     is_patient = models.BooleanField(default=False)
#     is_paramedic = models.BooleanField(default=False)
#     is_healthcaresp = models.BooleanField(default=False)
#     is_admin = models.BooleanField(default=False)


class Paramedic(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="paramedic_user")
    # paramedic_id = models.AutoField(primary_key=True)
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="paramedic_user")
    mobile = models.CharField(max_length=15, null=False)

    def __str__(self):
        return self.user.username


class Patient(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="patient_user")
    mobile = models.CharField(max_length=15, null=False)

    def __str__(self):
        return self.user.username
    blood_grp = models.CharField(max_length=5, null=False)
    pincode = models.CharField(max_length=8, null=False)
    related_param = models.ForeignKey(Paramedic, on_delete=models.CASCADE)
    medical_hist = models.FileField(upload_to='uploads',null=True)


class HealthcareSP(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="healthcaresp_user")
    mobile = models.CharField(max_length=15, null=False)

    def _str_(self):
        return self.user.username
    pincode = models.CharField(max_length=8, null=False)
    specialization = models.CharField(max_length=200, null=False)


class DakshasAdmin(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="admin_user")
    mobile = models.CharField(max_length=15, null=False)

    def _str_(self):
        return self.user.username


class Demand(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    paramedic = models.ForeignKey(Paramedic, on_delete=models.CASCADE)
    res_req = models.CharField(max_length=200, null=False)
    criticality = models.CharField(max_length=5)
    is_open = models.BooleanField(default=True)


class Appointment(models.Model):
    demand = models.ForeignKey(Demand, on_delete=models.CASCADE)
    healthcaresp = models.ForeignKey(HealthcareSP, on_delete=models.CASCADE)
    is_confirmed = models.CharField(max_length=40, default='pending')
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
