from api.models import Company, Vacancy
from rest_framework import serializers


class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField(max_length=255, default='')
    description = serializers.CharField(max_length=255, default='')
    city = serializers.CharField(max_length=255, default='')
    address = serializers.CharField(max_length=255, default='')

    def create(self, validated_data):
        company = Company.objects.create(**validated_data)
        return company

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance
    def delete(self, instance, validated_data):
        pass



class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ('id', 'name', 'description', 'salary')