import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Product } from '../product';
import { HttpClient } from '@angular/common/http';
import { Order } from '../order';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ProductService {
    shoppingCart:Product[]=[];

    constructor(private http: HttpClient) { }

     createProduct(product: Product): Observable<Product> { 
      return this.http.post<Product>(`${environment.apiUrl}/products/`,product); 
    }
    getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(`${environment.apiUrl}/products`);
    }

    getProduct(id: number): Observable<Product> {
     return this.http.get<Product>(`${environment.apiUrl}/products/${id}`);
    }

     updateProduct(id: number, product: Product): Observable<Product> { 
      return this.http.put<Product>(`${environment.apiUrl}/products/${id}`,product); 
    }
     deleteProduct(id: number): Observable<Product> {
      return this.http.delete<Product>(`${environment.apiUrl}/products/${id}`);
     }

    addProductToShoppingCart(product: Product){
       this.shoppingCart.push(product);
    }

    getProductsToShoppingCart():Product[]
    {
        return this.shoppingCart;
    }

    createOrder():  Observable<Order>{
       const order: Order ={idProduct:1, user: 'Raluca ', quantity: 4};
      return this.http.post<Order>(`${environment.apiUrl}/orders`,order); 
   }

}