import { TokenInterface } from './../interface/token-interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthInterface } from './../interface/auth-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http  : HttpClient) { }

  baseUrl = "https://api.escuelajs.co/api/v1/auth/login";

  getToken (informacion : AuthInterface | any ) {
    return this.http.post<TokenInterface>(`${this.baseUrl}`, informacion);
  }



}
