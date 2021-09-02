import {createAction, props } from '@ngrx/store';
import { Product } from 'src/app/product';
export const addProductSuccess = createAction('[Product] Success AddProduct', props<{ product: Product }>());
export const getAllProductsSuccess = createAction('[Product] Success GetAllProduct');
export const getProductSuccess = createAction('[Product] Success GetProduct', props<{ id: number }>());
export const editProductSuccess = createAction('[Product] Success EditProduct', props<{id: number, product: Product}>());
export const deleteProductSuccess = createAction('[Product] Success DeleteProduct', props<{ id: number }>());
export const addProductsToCartSuccess = createAction('[Product] Success AddProductToCart', props<{ product: Product }>());
