import {Component, OnInit} from '@angular/core';
import {Vacancy} from "../models";
import {VacancyService} from "../vacancy.service";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit{
  vacancies: Vacancy[] = [];
  companyId: number | undefined;

  vacancyId = '';
  vacancyDesc = '';
  vacancyName = '';
  salary = '';
  newName = '';
  compName = '';

  constructor(private route: ActivatedRoute,private vacancyService: VacancyService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((vacancies) =>{
      let _id = vacancies.get('id');
      this.companyId = Number(_id);
      this.vacancyService.getVacancies(this.companyId).subscribe((vacancies) =>{
        this.vacancies = vacancies;
      })
    })
  }

  deleteVac(vacId: number) {
    this.vacancyService.deleteVacancy(vacId).subscribe((vacancy) => {
      this.vacancies = this.vacancies.filter((vacancy) => vacancy.id !== vacId);
    })
  }
  addVac() {
    if(this.vacancyDesc.length) {
      this.vacancyService.addVacancy(this.vacancyName,this.vacancyDesc, Number(this.salary), Number(this.companyId)).subscribe(
        (vacancy) => {
          this.vacancies.push(vacancy);
          this.vacancyDesc = '';
          this.vacancyName = '';
          this.salary = '';
          this.compName = '';
        }
      )
    }
  }

  changeVacancy() {
    this.vacancyService.editVacancy(Number(this.vacancyId), this.newName).subscribe(vacancy => this.newName = vacancy.name);
  }
}
