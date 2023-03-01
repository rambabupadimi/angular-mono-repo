import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginEntity, LoginResponse } from "./+state/auth.models";


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(loginRequest: LoginEntity): Observable<LoginResponse> {
    const url = 'http://restapi.adequateshop.com/api/authaccount/login';
    return this.http.post<LoginResponse>(url,loginRequest);
  }

}
