import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Company} from "./models";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  BASE_URL = 'http://127.0.0.1:8000/';
  constructor(private client: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.client.get<Company[]>(`${this.BASE_URL}api/companies`)
  }

  createCompany(compId:number, companyName: string, companyCity: string, companyAddress: string): Observable<Company> {
    return this.client.post<Company>(
      `${this.BASE_URL}api/companies`,
      {id: compId,name: companyName, city: companyCity, address:companyAddress}
    )
  }

  deleteCompany(companyId: number): Observable<any> {
    return this.client.delete(`${this.BASE_URL}api/companies/${companyId}`)
  }

  editCompany(compId: number, compName: string) {
    return this.client.put<Company>(`${this.BASE_URL}api/companies/${compId}/`, {id:compId, name: compName});
  }
}
