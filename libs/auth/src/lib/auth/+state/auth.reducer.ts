import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import { loginStart, loginSuccess, loginFailure } from './auth.actions';
import { AuthEntity, UserEntity } from './auth.models';

export const AUTH_FEATURE_KEY = 'auth';

export interface LoginState {
  user: UserEntity;
  isLoading: boolean;
  error: string;
}

export interface ForgotPasswordState {
  data: null;
}

export interface ResetPasswordState {
  data: null;
}

export interface AuthState {
  loginState: LoginState | null;
  forgotPasswordState: ForgotPasswordState | null;
  resetPasswordState: ResetPasswordState | null;
}

export const initState: AuthState = {
  loginState: null,
  forgotPasswordState: null,
  resetPasswordState: null,
};

const reducer = createReducer(
  initState,

  on(loginStart, (state: any, action) => {
    return {
      ...state,
      loginState: {
        isLoading: true,
        error: null,
        user:null
      },
    };
  }),
  on(loginSuccess, (state: any, action: any) => {

    const newState = {
      isLoading: false,
      error: null,
      user: action.user,
    }
    localStorage.setItem('token', action.user.Token);
    return {
      ...state,
      loginState: { ...newState } ,
    };
  }),
  on(loginFailure, (state: any, action: any) => {

    const newState = {
      isLoading: false,
      error: action.error,
      user: null,
    }
    return {
      ...state,
      loginState: { ...newState } ,
    };
  })
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
