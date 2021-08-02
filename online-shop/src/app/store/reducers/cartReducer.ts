import { Action, createReducer, on } from '@ngrx/store';
import * as cartActions from '../actions/cartActions';

export interface State {
  //it will be 0 for fail, 1 for success
  createOrderSuccess: number;

}

export const initialState: State = {
 createOrderSuccess: 0,

};

const productReducer = createReducer(
  initialState,
  on(cartActions.createOrderSuccess,state=>({...state, createOrderSuccess:1})),

);

export function reducer(state: State | undefined, action: Action) {
  return productReducer(state, action);
}