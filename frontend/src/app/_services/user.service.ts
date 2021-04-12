// import { Injectable } from '@angular/core';
﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { User } from './../_models/user.model'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/accounts`);
  }
  register(user: User) {
    return this.http.post(`${environment.apiUrl}/accounts/register`, user);
  }
  verifyEmail(token : string){
    return this.http.post(`${environment.apiUrl}/accounts/verify-email`, {token});
  }
  getById(id: number) {
    return this.http.get(`${environment.apiUrl}/accounts/` + id);
}
}
