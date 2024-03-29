
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthFacade } from '../+state/auth.facade';
import { ENVIRONMENT } from '@angular-monorepo-demo/environment';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginFormGroup: any = FormGroup;
  emailPattern = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/);

  isLoading$?: Observable<boolean>;
  loginSuccess$?: Observable<any>;
  loginFailure$?: Observable<any>;


  constructor(private authFacade: AuthFacade,
              private toastr: ToastrService,
              private router: Router, 
              @Inject(ENVIRONMENT) private env: any) {
    this.isLoading$ = authFacade.$loginLoadingStatus;
    this.loginSuccess$ = authFacade.$loginSuccess;
    this.loginFailure$ = authFacade.$loginfailed;
   }

  ngOnInit(): void {
    console.log(this.env)
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginFormGroup = new FormGroup({
      email: new FormControl("",[Validators.required, Validators.pattern(this.emailPattern)]),
      password: new FormControl("",[Validators.required, Validators.minLength(6)])
    })

    this.isLoading$?.subscribe((response) => {
      console.log('called loading success..',response);

    })

    this.loginSuccess$?.subscribe((response) => {
      if (response) {
        this.toastr.success('User logged in success', "Success")
        if(this.env.type === 'admin') {
          this.router.navigate(['admin-dashboard']);
        } else {
          this.router.navigate(['user-dashboard']);

        }
      }
    })

    this.loginFailure$?.subscribe((response) => {
      if (response) {
        this.toastr.error('called login failure...',response)
      }
    })
  }

  doLogin() {
    if (this.loginFormGroup.valid) {
      console.log(this.loginFormGroup.value);
      this.authFacade.doLogin(this.loginFormGroup.value)
    }
  }

}
