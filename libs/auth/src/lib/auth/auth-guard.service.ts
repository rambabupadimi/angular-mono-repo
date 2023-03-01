
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class AuthGuardService implements CanActivate {

    constructor( private router: Router) { }

  async canActivate() {

    const isUserAuthenticated = localStorage.getItem('token');
    if (isUserAuthenticated) {
          console.log('called if')
                this.router.navigate(['users']);
                return false;
    } else {
      console.log('called else');
            return true;
        }
    }

}
