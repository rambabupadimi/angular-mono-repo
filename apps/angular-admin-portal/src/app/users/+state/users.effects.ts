import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { switchMap, map, catchError,of } from 'rxjs';
import { UserService } from '../user.service';

import { initUsers, loadUsersSuccess, loadUsersFailure, userLogout,userLogoutSuccess,userLogoutFailure }  from './users.actions';
import { UsersListResponse } from './users.models';

@Injectable()
export class UsersEffects {

  constructor(private userService: UserService,
    private router: Router,
    private readonly actions$: Actions) { }

  getUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(initUsers),
      switchMap((action:any) => {
        return this.userService.getUsers(action.page).pipe(
          map((usersResponse: UsersListResponse) => {
            console.log(usersResponse);
            return loadUsersSuccess({
              users: usersResponse.data,
              total: usersResponse.totalrecord
            })
          }),
          catchError((errorResp) => {
           // const error = errorResp.error.message;
            console.log(errorResp);

            return of(
              loadUsersFailure({
                error:'Something went wrong'
              })
            );
          })
        );
      })
    );
  });

  userLogout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userLogout),
      switchMap((action:any) => {
        return this.userService.userLogout().pipe(
          map((response) => {
            localStorage.clear();
            this.router.navigateByUrl('/login');
            return userLogoutSuccess()

          }),
          catchError((errorResp) => {
           // const error = errorResp.error.message;
            console.log(errorResp);
            return of(
              userLogoutFailure()
            );
          })
        );
      })
    );
  });


}
