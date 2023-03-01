import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { switchMap, map, catchError } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { of } from 'rxjs';

import {loginStart,loginSuccess,loginFailure} from './auth.actions';
import { LoginResponse } from './auth.models';
import * as AuthFeature from './auth.reducer';

@Injectable()
export class AuthEffects {

  constructor(private readonly actions$: Actions, private authService: AuthService) {}

  loginUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      switchMap((action:any) => {
        return this.authService.login(action.login).pipe(
          map((loginResponse: LoginResponse) => {

            console.log(loginResponse);

            if (loginResponse.code == 1) {
              return loginFailure({
                user: null,
                isLoading: false,
                error:loginResponse.message
              });

            } else {
              return loginSuccess({
                user: loginResponse.data,
                isLoading: false,
                error:''
              });

            }
          }),
          catchError((errorResp) => {
            const error = errorResp.error.message;
            return of(
              loginFailure({
                user: null,
                isLoading: false,
                error:'Something went wrong'
              })
            );
          })
        );
      })
    );
  });



}
