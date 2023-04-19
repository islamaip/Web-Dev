import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vacancy} from "./models";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  BASE_URL = 'http://127.0.0.1:8000/';
  constructor(private client: HttpClient) { }

  getVacancies(companyId: number): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}api/companies/${companyId}/vacancies/`)
  }

  deleteVacancy(vacancyId: number): Observable<any> {
    return this.client.delete(`${this.BASE_URL}api/vacancies/${vacancyId}`)
  }

  addVacancy(vacName: string, vacDesc: string, vacSalary: number, compId: number): Observable<Vacancy> {
    return this.client.post<Vacancy>(`${this.BASE_URL}api/vacancies/`,
      {name: vacName, description: vacDesc, salary: vacSalary, company: compId});
  }

  editVacancy(vacId: number, vacName:string){
    return this.client.put<Vacancy>(`${this.BASE_URL}api/vacancies/${vacId}/`, {name: vacName})
  }
}
