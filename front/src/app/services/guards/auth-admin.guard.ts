import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {
  UserData = JSON.parse(localStorage.getItem('userData')); ;
  constructor(private route: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.UserData.token && this.UserData.type === 1){
      return true;
    }else {
      this.route.navigate(['login'])
      return false;
    }
  }

}
