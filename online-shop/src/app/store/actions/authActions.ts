import { createAction, props } from '@ngrx/store';
import { Credentials } from 'src/app/credentials';

export const authSuccess = createAction('[Login] Success Login', props<{ credentials: Credentials }>());
export const authFailed = createAction('[Login] Failure Login', props<{ credentials: Credentials }>());