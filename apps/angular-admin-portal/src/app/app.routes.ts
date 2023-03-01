import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch:'full',
    redirectTo: 'admin'

  },
  {
    path: 'admin',

    // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
    loadChildren: () => import('../../../../libs/auth/src/lib/auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path: 'users',
    loadChildren: () => import('../app/users/users.module').then(m=>m.UsersModule)
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
