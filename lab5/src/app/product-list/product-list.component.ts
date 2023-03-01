import { Component, Input, OnInit} from '@angular/core';
import {Product, products} from '../products';
import {Category, categories} from "../categories";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products = [...products];
  category: Category;
  constructor(private route: ActivatedRoute) {
    this.category = {} as Category;
  }
  ngOnInit(): void {
    const thisCategory = String(this.route.snapshot.paramMap.get('productCategory'));

    this.category = categories.find((x) => x.name === thisCategory) as Category;

  }
  share() {
    window.open("https://wa.me/?text=");
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  onRemove(currentName: string) {
    this.products = this.products.filter((x)=> x.name !== currentName)
  }

  onLiked(currentId: Product) {
      currentId.likes += 1;
    }
  }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/