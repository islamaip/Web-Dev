import json
from rest_framework import status
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from rest_framework.response import Response
from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer


@api_view(['GET', 'POST'])
def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)

    if request.method == 'POST':
        data = json.loads(request.body)
        vacancy_name = data.get('name', '')
        vacancy_desc = data.get('description', '')
        vacancy_salary = data.get('salary', '')
        vac_company_id = data.get('company', '')
        vac_company = Company.objects.get(id=vac_company_id)
        vacancy = Vacancy.objects.create(name=vacancy_name, description = vacancy_desc, salary = vacancy_salary, company=vac_company)
        return JsonResponse(vacancy.to_json())


@csrf_exempt
def vacancy_detail(request, vac_id):
    try:
        vacancy = Vacancy.objects.get(id=vac_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        serializer = VacancySerializer(vacancy)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        data = json.loads(request.body)
        new_vacancy_name = data.get('name', vacancy.name)
        #desc = data.get('desc', vacancy.description)
        vacancy.name = new_vacancy_name
        vacancy.save()
        return JsonResponse(vacancy.to_json())
    elif request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({'deleted': True})


def top_vacancies(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    vacancies_to_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_to_json, safe=False)