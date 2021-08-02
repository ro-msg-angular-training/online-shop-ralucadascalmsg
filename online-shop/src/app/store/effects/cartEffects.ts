import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from 'src/app/services/product.service';
import { Order } from 'src/app/order';

export class ProductEffects {
     order?: Order;

       createOrderSuccess$ = createEffect(() => this.actions$.pipe(
        ofType('[Product] Success createOrderSuccess'),
        mergeMap(() => this.productService.createOrder()
          .pipe(
            map(order => ({ type: '[Product] Order Created Success', payload: order })),
            catchError(() => EMPTY)
          ))
        )
      );
   
   
      
    constructor(
      private actions$: Actions,
      private productService: ProductService,
    ) {}
  }