# Generated by Django 4.0.5 on 2022-06-04 22:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('healthcare', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='patient',
            name='medical_hist',
            field=models.FileField(null=True, upload_to='uploads'),
        ),
    ]
