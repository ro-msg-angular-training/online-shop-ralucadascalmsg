import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/services/authService';
import { Credentials } from 'src/app/credentials' 
import { User } from 'src/app/user';

export class AuthEffects {
    credentials!: Credentials;
    user?: User[];
    
      authSuccess$ = createEffect(() => this.actions$.pipe(
      ofType('[Login] Success Login'),
      mergeMap(() => this.authService.login(this.credentials)
        .pipe(
          map(user => ({ type: '[Login] Login Success', payload: user })),
          catchError(() => EMPTY)
        ))
      )
    );
    constructor(
        private actions$: Actions,
        private authService: AuthService,
      ) {}
        }
