import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  

  constructor(public router: Router) { //DI for router module

  }

  canActivate(): boolean {
    // console.log("auth activated");
    // // return true;
    // return false
    let obj = sessionStorage.getItem("admin");
    if (obj == null) {
      this.router.navigate(["login"]);
      return false
    } else {
      return true;
    }
  }
}
