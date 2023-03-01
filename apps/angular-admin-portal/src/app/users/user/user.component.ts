import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { UsersFacade } from '../+state/users.facade';

@Component({
  selector: 'angular-monorepo-demo-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  displayedColumns: string[] = [
    'Id',
    'Name',
    'Email',
    'Location'
  ];
  isLoaded$?: Observable<boolean>;
  users$?: Observable<any>;
  usersFailure$?: Observable<any>;
  total$?: Observable<any>;
  page = 1;

  constructor(private userFacade: UsersFacade, private toastr: ToastrService, private router: Router) {
    this.isLoaded$ = userFacade.loaded$;
    this.users$ = userFacade.allUsers$;
    this.total$ = userFacade.total$;
   }

  ngOnInit(): void {
    this.userFacade.init(this.page)
  }

  next(e: any) {
    this.page = e.pageIndex + 1;
    this.userFacade.init(this.page);
  }

  logout() {
    this.userFacade.logout();
  }
}
