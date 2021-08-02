
import { Action, createReducer, on } from '@ngrx/store';
import * as productActions from '../actions/productActions';

export interface State {
  //it will be 0 for fail, 1 for success
  addProductSuccess: number;
  getAllProductsSuccess: number;
  getProductSuccess: number;
  editProductSuccess: number;
  deleteProductSuccess: number;
  addProductsToCartSuccess: number;
}

export const initialState: State = {
  addProductSuccess: 0,
  getAllProductsSuccess: 0,
  getProductSuccess: 0,
  editProductSuccess: 0,
  deleteProductSuccess: 0,
  addProductsToCartSuccess: 0,
};

const productReducer = createReducer(
  initialState,
  on(productActions.addProductSuccess,state=>({...state, addProductSuccess:1})),
  on(productActions.getProductSuccess,state=>({...state, getProductSuccess:1})),
  on(productActions.getAllProductsSuccess,state=>({...state, getAllProductsSuccess:1})),
  on(productActions.editProductSuccess,state=>({...state, editProductSuccess:1})),
  on(productActions.deleteProductSuccess,state=>({...state, deleteProductSuccess:1})),
  on(productActions.addProductsToCartSuccess,state=>({...state, addProductsToCartSuccess:1})),
);

export function reducer(state: State | undefined, action: Action) {
  return productReducer(state, action);
}