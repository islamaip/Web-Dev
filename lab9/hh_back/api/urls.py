from django.urls import path, re_path
from api import views

urlpatterns = [
    path('companies', views.company_list),
    path('companies/<int:comp_id>/',views.company_detail),
    path('companies/<int:company_id>/vacancies/', views.company_vacancies),
    path('vacancies/', views.vacancy_list),
    path('vacancies/<int:vac_id>/', views.vacancy_detail),
    path('vacancies/top_ten/', views.top_vacancies)
]