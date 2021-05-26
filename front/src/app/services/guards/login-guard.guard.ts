import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { BackendApiService } from '../backend-api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  UserData = JSON.parse(localStorage.getItem('userData')); ;
  constructor(private login: BackendApiService, private route: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.UserData){
      this.route.navigate(['home'])
      return false;
    }else {
      return true;
    }

  }

}
