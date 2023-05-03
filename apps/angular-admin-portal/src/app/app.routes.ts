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
    loadChildren: () => import('@angular-monorepo-demo/auth').then(m=>m.AuthModule)
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('../app/users/users.module').then(m=>m.UsersModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
