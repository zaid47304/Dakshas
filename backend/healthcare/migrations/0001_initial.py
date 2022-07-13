# Generated by Django 4.0.5 on 2022-06-04 20:12

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Paramedic',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mobile', models.CharField(max_length=15)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='paramedic_user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Patient',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mobile', models.CharField(max_length=15)),
                ('blood_grp', models.CharField(max_length=5)),
                ('pincode', models.CharField(max_length=8)),
                ('medical_hist', models.FileField(upload_to='uploads')),
                ('related_param', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='healthcare.paramedic')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='patient_user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='HealthcareSP',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mobile', models.CharField(max_length=15)),
                ('pincode', models.CharField(max_length=8)),
                ('specialization', models.CharField(max_length=200)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='healthcaresp_user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Demand',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('res_req', models.CharField(max_length=200)),
                ('criticality', models.CharField(max_length=5)),
                ('is_open', models.BooleanField(default=True)),
                ('paramedic', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='healthcare.paramedic')),
                ('patient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='healthcare.patient')),
            ],
        ),
        migrations.CreateModel(
            name='DakshasAdmin',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mobile', models.CharField(max_length=15)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='admin_user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_confirmed', models.CharField(default='pending', max_length=40)),
                ('start_time', models.DateTimeField()),
                ('end_time', models.DateTimeField()),
                ('demand', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='healthcare.demand')),
                ('healthcaresp', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='healthcare.healthcaresp')),
            ],
        ),
    ]
