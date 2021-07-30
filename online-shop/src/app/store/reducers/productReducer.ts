
import { Action, createReducer, on } from '@ngrx/store';
import { addProductSuccess,deleteProductSuccess, editProductSuccess } from '../actions/productActions';

export interface State {
  success: string;
}

export const initialState: State = {
  success: ''
};

const productReducer = createReducer(
  initialState,
);

export function reducer(state: State | undefined, action: Action) {
  return productReducer(state, action);
}