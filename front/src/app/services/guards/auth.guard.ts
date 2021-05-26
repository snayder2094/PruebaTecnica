import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { BackendApiService } from '../backend-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  UserData = JSON.parse(localStorage.getItem('userData')); ;
  constructor(private route: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.UserData.token){
      return true;
    }else {
      this.route.navigate(['login'])
      return false;
    }
  }

}
