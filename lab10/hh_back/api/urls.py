from django.urls import path, re_path
from api import views

urlpatterns = [
    path('companies', views.CompanyList.as_view()),
    path('companies/<int:comp_id>/', views.CompanyDetail.as_view()),
    path('companies/<int:company_id>/vacancies/', views.CompanyVacancies.as_view()),
    path('vacancies/', views.vacancy_list),
    path('vacancies/<int:vac_id>/', views.vacancy_detail),
    path('vacancies/top_ten/', views.top_vacancies)
]