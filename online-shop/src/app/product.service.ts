import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Product } from './product';
import { PRODUCTS } from './mock-products'
import { HttpClient } from '@angular/common/http';
import { Order } from './order';


@Injectable({ providedIn: 'root' })
export class ProductService {
    shoppingCart:Product[]=[];

    constructor(private http: HttpClient) { }

     createProduct(product: Product): Observable<Product> { 
      return this.http.post<Product>('http://localhost:3000/products/',product); 
    }
    getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>('http://localhost:3000/products');
    }

    getProduct(id: number): Observable<Product> {
     return this.http.get<Product>(`http://localhost:3000/products/${id}`);
    }

     updateProduct(id: number, product: Product): Observable<Product> { 
      return this.http.put<Product>(`http://localhost:3000/products/${id}`,product); 
    }
     deleteProduct(id: number): Observable<Product> {
      return this.http.delete<Product>(`http://localhost:3000/products/${id}`);
     }

    addProductToShoppingCart(product: Product){
       this.shoppingCart.push(product);
       console.log(product);
    }

    getProductsToShoppingCart():Product[]
    {
        return this.shoppingCart;
    }

    createOrder(){
       const order: Order ={idProduct:1, user: 'Raluca ', quantity: 4};
       console.log("order");
       this.http.post<Order>('http://localhost:3000/orders',order); 
   }

}