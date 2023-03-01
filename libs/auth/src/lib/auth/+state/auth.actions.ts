import { createAction, props } from '@ngrx/store';
import { AuthEntity, LoginEntity, UserEntity } from './auth.models';


export const LOGIN_START = '[Login] do Login';
export const LOGIN_SUCCESS = '[Login] login success';
export const LOGIN_FAILURE = '[Login]  Login failure';



/**
 * Login Actions
 */
export const loginStart = createAction(
  LOGIN_START,
  props<{login: LoginEntity,isLoading: boolean}>()
)

export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{user: UserEntity, isLoading: boolean, error: string}>()
)

export const loginFailure = createAction(
  LOGIN_FAILURE,
  props<{user: null, isLoading: boolean, error: string}>()
)



/**
 * Auth actions
 */
export const initAuth = createAction('[Auth Page] Init');
export const loadAuthSuccess = createAction(
  '[Auth/API] Load Auth Success',
  props<{ auth: AuthEntity[] }>()
);
export const loadAuthFailure = createAction(
  '[Auth/API] Load Auth Failure',
  props<{ error: any }>()
);








