import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import { User } from '../models/User';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

constructor(private http: HttpClient) { }

private loginUrl = 'https://backend-nestjs-dev.azurewebsites.net/auth/login';
private registerUrl = 'https://backend-nestjs-dev.azurewebsites.net/auth/register';

httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

// KO --> Back
getUsers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:4000/");
}

// ok
login(username: string, password: string): Observable<any> {

    return this.http.post(this.loginUrl, {
        username,
        password
      }, this.httpOptions);
  }

  // ok
  register(username: string, password: string, email: string,): Observable<any> {
    return this.http.post(this.registerUrl, {
      username,
      email,
      password
    }, this.httpOptions);
  }

}
