from django.shortcuts import render
from api.models import Company, Vacancy
import json
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse


def company_list(request):
    companies = Company.objects.all()
    company = [c.to_json() for c in companies]
    return JsonResponse(company, safe=False)


def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancy = [v.to_json() for v in vacancies]
    return JsonResponse(vacancy, safe=False)


@csrf_exempt
def company_detail(request, comp_id):
    try:
        company = Company.objects.get(id=comp_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)
    if request.method == 'GET':
        return JsonResponse(company.to_json())


@csrf_exempt
def vacancy_detail(request, vac_id):
    try:
        vacancy = Vacancy.objects.get(id=vac_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)
    if request.method == 'GET':
        return JsonResponse(vacancy.to_json())


@csrf_exempt
def company_vacancies(request, company_id):
    try:
        company_i = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)
    if request.method == 'GET':
        vacancies = Vacancy.objects.filter(company=company_i.id)
        vacancy = [v.to_json() for v in vacancies]
        return JsonResponse(vacancy, safe=False)


def top_vacancies(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    vacancies_to_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_to_json, safe=False)