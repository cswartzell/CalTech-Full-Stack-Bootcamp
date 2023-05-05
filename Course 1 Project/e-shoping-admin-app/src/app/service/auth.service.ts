import { Injectable } from '@angular/core';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signIn(login: Admin): boolean {
    return (login.emailid == "admin@gmail.com" && login.password == "123");
  }
}
