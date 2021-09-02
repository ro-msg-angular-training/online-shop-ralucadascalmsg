
import { Action, createReducer, on } from '@ngrx/store';
import { authFailed, authSuccess } from './authActions';

export interface State {
  success: string;
  failed: string;
}

export const initialState: State = {
  success: '',
  failed: '',
};

const authReducer = createReducer(
  initialState,
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}