import { Component, OnInit } from '@angular/core';
import {Product} from '../product'
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product={
    id: 1,
    name: 'Phone L', 
    category: 'Phone',
    price: 150,
    description: 'A large phone'
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
