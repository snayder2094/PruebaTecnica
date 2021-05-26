import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { BackendApiService } from './backend-api.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InterceptorApiService implements HttpInterceptor {

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let UserData = JSON.parse(localStorage.getItem('userData')); ;


    if (UserData) {
          request = request.clone({
            setHeaders: {
              'auth-token': UserData.token,
              'Access-Control-Allow-Origin': '*',
            },
          });
          return next.handle(request);
    } else {
      return next.handle(request);
    }

  }
}
