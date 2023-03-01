import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

  isAdmin = false;

  constructor(private router:Router) {
    if (this.router.url.includes('admin')) {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }

  ngOnInit(): void {}
}
