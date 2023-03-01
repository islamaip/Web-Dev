import { Component } from '@angular/core';
import { products, Product } from '../products';
import {categories} from "../categories";

@Component({
  selector: 'app-app-categories',
  templateUrl: './app-categories.component.html',
  styleUrls: ['./app-categories.component.css']
})
export class AppCategoriesComponent {
  products = [...products];
  categories = [...categories];

}
