import json
from django.shortcuts import Http404
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from rest_framework.response import Response
from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer
from rest_framework.views import APIView

class CompanyList(APIView):

    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CompanyDetail(APIView):
    def get_object(self, comp_id):
        try:
            return Company.objects.get(pk=comp_id)
        except Company.DoesNotExist as e:
            return Response(str(e),status=status.HTTP_400_BAD_REQUEST)

    def get(self,request, comp_id):
        instance = self.get_object(comp_id)
        serializer = CompanySerializer(instance)
        return Response(serializer.data)

    def put(self, request, comp_id):
        instance = self.get_object(comp_id)
        serializer = CompanySerializer(instance=instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request, comp_id):
        instance = self.get_object(comp_id)
        instance.delete()
        return Response({'deleted': True})


class CompanyVacancies(APIView):
    def get(self,request, company_id):
        vacancies = Vacancy.objects.filter(company=company_id)
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
    def delete(self,request,vacancy_id):
        vacancy = Vacancy.objects.get(vacancy_id)
