import { createAction, props } from '@ngrx/store';
import { Order } from 'src/app/order';

export const createOrderSuccess = createAction('[Cart] Success createOrder',props<{ order: Order }>());