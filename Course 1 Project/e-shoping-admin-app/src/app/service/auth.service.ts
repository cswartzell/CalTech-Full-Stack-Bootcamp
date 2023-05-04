import { Injectable } from '@angular/core';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signIn(admin: Admin): boolean {
    return (admin.emailid == "admin@gmail.com" && admin.password == "123");
  }
}
