import {Component, OnInit} from '@angular/core';
import {Company} from "../models";
import {CompanyService} from "../company.service";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit{
  companies: Company[] = [];
  newCompany = '';
  compCity = '';
  compAddress = '';

  newId = '';

  newName = '';
  compId = '';
  constructor(private companyService: CompanyService) {
  }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(){
    this.companyService.getCompanies().subscribe((companies) => {
      this.companies = companies;
    })
  }

  addCompany() {
    if(this.newCompany.length) {
      this.companyService.createCompany(Number(this.compId),this.newCompany, this.compCity, this.compAddress).subscribe((company) => {
        this.companies.push(company);
        this.compId = '';
        this.newCompany = '';
        this.compCity = '';
        this.compAddress = '';
      })
    }
  }

  deleteCompany(compId: number) {
    this.companyService.deleteCompany(compId).subscribe((company) => {
      this.companies = this.companies.filter((company) => company.id !== compId);
    })
  }

  changeName() {
    this.companyService.editCompany(Number(this.newId), this.newName).subscribe(company => this.newName = company.name);
  }
}
