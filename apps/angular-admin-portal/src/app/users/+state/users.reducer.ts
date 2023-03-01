import { state } from '@angular/animations';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { stat } from 'fs';

import * as UsersActions from './users.actions';
import { UsersEntity } from './users.models';

export const USERS_FEATURE_KEY = 'users';

export interface UsersState extends EntityState<UsersEntity> {
  selectedId?: string | number; // which Users record has been selected
  loaded: boolean; // has the Users list been loaded
  error?: string | null; // last known error (if any)
  total?: number;
}

export interface UsersPartialState {
  readonly [USERS_FEATURE_KEY]: UsersState;
}

export const usersAdapter: EntityAdapter<UsersEntity> =
  createEntityAdapter<UsersEntity>();

export const initialUsersState: UsersState = usersAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const reducer = createReducer(
  initialUsersState,
  on(UsersActions.initUsers, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(UsersActions.loadUsersSuccess, (state, { users,total }) =>
    usersAdapter.setAll(users, {
      ...state,
      loaded: true,
      total: total
    })
  ),
  on(UsersActions.loadUsersFailure, (state, { error }) => ({ ...state, error })),


);

export function clearState(reducer:any) {
  return function (state:any, action:any) {
    console.log('called---', action.type);

    if (action.type === '[User Logout success]') {
     console.log('state--',state)
      state = undefined;
      console.log('called test---',state);

    }

    console.log(state);

    return reducer(state, action);
  };
}


export function usersReducer(state: UsersState | undefined, action: Action) {
  return reducer(state, action);
}

