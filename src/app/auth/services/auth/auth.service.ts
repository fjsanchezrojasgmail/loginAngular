import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }

  register(signupRequest: any): Observable<any> {
    return this.http.post(`${environment.basicURL}` + 'api/auth/signup', signupRequest)
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post(`${environment.basicURL}` + 'api/auth/login', loginRequest)
  }
}
