import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/product';

export class ProductEffects {
    products?: Product[];
    product!: Product;
    id!: number;

    addProductSuccess$ = createEffect(() => this.actions$.pipe(
      ofType('[Product] Success AddProduct'),
      mergeMap(() => this.productService.createProduct(this.product)
        .pipe(
          map(products => ({ type: '[Product API] Product Added Success', payload: products })),
          catchError(() => EMPTY)
        ))
      )
    );

    getAllProductsSuccess$ = createEffect(() => this.actions$.pipe(
        ofType('[Product] Success GetAllProducts'),
        mergeMap(() => this.productService.getProducts()
          .pipe(
            map(products => ({ type: '[Product API] Products Loaded Success', payload: products })),
            catchError(() => EMPTY)
          ))
        )
      );

      getProductsSuccess$ = createEffect(() => this.actions$.pipe(
        ofType('[Product] Success GetProduct'),
        mergeMap(() => this.productService.getProduct(this.id)
          .pipe(
            map(products => ({ type: '[Product API] Product Loaded Success', payload: products })),
            catchError(() => EMPTY)
          ))
        )
      );
   
    editProductSuccess$ = createEffect(() => this.actions$.pipe(
        ofType('[Product] Success EditProduct'),
        mergeMap(() => this.productService.updateProduct(this.id,this.product)
          .pipe(
            map(products => ({ type: '[Product API] Product Updated Success', payload: products })),
            catchError(() => EMPTY)
          ))
        )
      );

      deleteProductsSuccess$ = createEffect(() => this.actions$.pipe(
        ofType('[Product] Success DeleteProduct'),
        mergeMap(() => this.productService.deleteProduct(this.id)
          .pipe(
            map(products => ({ type: '[Product API] Product Deleted Success', payload: products })),
            catchError(() => EMPTY)
          ))
        )
      );

    /*  addProductToCartSuccess$ = createEffect(() => this.actions$.pipe(
        ofType('[Product] Success AddProductToCart'),
        mergeMap(() => this.productService.addProductToShoppingCart(this.product)
          .pipe(
            map(products => ({ type: '[Product API] Product AddedToCart Success', payload: products })),
            catchError(() => EMPTY)
          ))
        )
      );*/
   
   
      
    constructor(
      private actions$: Actions,
      private productService: ProductService,
    ) {}
  }