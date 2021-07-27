import { Component, OnInit } from '@angular/core';
import {PRODUCTS} from '../mock-products'
@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.scss']
})
export class ListOfProductsComponent implements OnInit {
  products=PRODUCTS
  constructor() { }

  ngOnInit(): void {
  }

}
