# Generated by Django 4.2 on 2023-04-19 06:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='address',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='company',
            name='description',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='vacancy',
            name='description',
            field=models.CharField(max_length=255),
        ),
    ]
