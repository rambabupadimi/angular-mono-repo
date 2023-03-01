import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch:'full',
    redirectTo: 'user'

  },
  {
    path: 'user',

    // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
    loadChildren: () => import('../../../../libs/auth/src/lib/auth/auth.module').then(m=>m.AuthModule)
  }

];
