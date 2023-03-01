import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import { LoginEntity } from './auth.models';
import * as AuthFeature from './auth.reducer';
import * as AuthSelectors from './auth.selectors';

@Injectable()
export class AuthFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  // loaded$ = this.store.pipe(select(AuthSelectors.getAuthLoaded));
  // allAuth$ = this.store.pipe(select(AuthSelectors.getAllAuth));
  // selectedAuth$ = this.store.pipe(select(AuthSelectors.getSelected));

  $loginSuccess = this.store.pipe(select(AuthSelectors.getLoginSuccess));
  $loginfailed = this.store.pipe(select(AuthSelectors.getLoginFailure))
  $loginLoadingStatus = this.store.pipe(select(AuthSelectors.getLoginLoadingState))


  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  doLogin(loginRequest:LoginEntity) {
    this.store.dispatch(AuthActions.loginStart({ login: loginRequest, isLoading:true }));
  }
}
