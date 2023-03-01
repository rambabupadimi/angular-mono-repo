import { Component, Inject, OnInit } from '@angular/core';
import { ENVIRONMENT } from '@angular-monorepo-demo/environment';

@Component({
  selector: 'angular-monorepo-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(@Inject(ENVIRONMENT) private env: any) {

  }

  ngOnInit(): void {
    console.log(this.env);
  }


  title = 'angular-admin-portal';
}
