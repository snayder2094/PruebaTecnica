import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(protected http: HttpClient) { }

  signUp(data){
    const path = '/api/user/register';
    return this.http.post(path, data)
  }

  login(data){
    const path =   '/api/user/login';
    return this.http.post(path, data)
  }

  dataApiAdmin() {
    const path = '/api/ApiTwich/admin';
    let UserData = JSON.parse(localStorage.getItem('userData')); ;
    const headerDict = {
      'Content-Type': 'application/json',
      'auth-token': UserData.token
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get(path, requestOptions)
  }

  dataApi() {
    const path = '/api/ApiTwich/user';
    let UserData = JSON.parse(localStorage.getItem('userData')); ;
    const headerDict = {
      'Content-Type': 'application/json',
      'auth-token': UserData.token
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get(path, requestOptions)
  }

}
