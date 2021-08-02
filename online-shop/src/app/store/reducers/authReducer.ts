
import { Action, createReducer, on } from '@ngrx/store';
import * as authActions from '../actions/authActions';

export interface State {
  success: number;
  failed: number;
}

export const initialState: State = {
  success: 0, //it will be 1 for true(success) 
  failed: 0, //it will be 1 for false(failure)
};

const authReducer = createReducer(
  initialState,
  on(authActions.authSuccess,state=>({...state, success:1})),
  on(authActions.authFailed,state=>({...state, failed:1})),
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}