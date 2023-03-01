import { createFeatureSelector, createSelector } from '@ngrx/store';
import { create } from 'domain';
import { AUTH_FEATURE_KEY, AuthState, LoginState } from './auth.reducer';

// Lookup the 'Auth' feature state managed by NgRx
export const getAuthState = createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);


export const getLoginState = createSelector(
  getAuthState,
  (state: AuthState) => state.loginState
)

export const getLoginLoadingState = createSelector(
  getAuthState,
  (state: any) => state?.loginState?.isLoading
)

export const getLoginSuccess = createSelector(getAuthState,
(state:any) =>  state?.loginState?.user)

export const getLoginFailure= createSelector(getAuthState,
  (state:any) =>  state?.loginState?.error)

