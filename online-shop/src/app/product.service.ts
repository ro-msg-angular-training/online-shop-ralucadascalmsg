import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Product } from './product';
import { PRODUCTS } from './mock-products'

@Injectable({ providedIn: 'root' })
export class ProductService {


  getProducts(): Observable<Product[]> {
    const products = of(PRODUCTS);
    return products;
  }

  getProduct(id: number): Observable<Product> {
    const product = PRODUCTS.find(p => p.id === id)!;
    return of(product);
  }
}