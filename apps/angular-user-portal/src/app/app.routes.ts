import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch:'full',
    redirectTo: 'user'

  },
  {
    path: 'user',
    loadChildren: () => import('@angular-monorepo-demo/auth').then(m=>m.AuthModule)
  },
  {
    path:'user-dashboard',
    loadChildren: () => import('../../../angular-user-portal/src/app/dashboard/dashboard.module').then(m=>m.DashboardModule)
  }

];
