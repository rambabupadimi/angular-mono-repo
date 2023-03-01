import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { observable, Observable, of } from "rxjs";
import { UsersListResponse } from "./+state/users.models";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUsers(page: number): Observable<UsersListResponse> {
    const url = 'http://restapi.adequateshop.com/api/users?page='+page;
    return this.http.get<UsersListResponse>(url);
  }

  userLogout(): Observable<any> {
    return of(null);
  }

}
