import { createAction, props } from '@ngrx/store';
import { UsersEntity } from './users.models';

export const initUsers = createAction('[Users Page] Init',
props<{page: number}>());

export const loadUsersSuccess = createAction(
  '[Users/API] Load Users Success',
  props<{ users: UsersEntity[], total: number }>()
);

export const loadUsersFailure = createAction(
  '[Users/API] Load Users Failure',
  props<{ error: any }>()
);


export const userLogout = createAction('[User Logout]');
export const userLogoutSuccess = createAction('[User Logout success]');
export const userLogoutFailure = createAction('[User Logout failure]');
