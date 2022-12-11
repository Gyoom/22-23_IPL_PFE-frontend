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

private loginUrl = 'http://localhost:4000/auth/login';
private registerUrl = 'http://localhost:4000/auth/register';

httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

// KO --> Back
getUsers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:4000/");
}

login(username: string, password: string): Observable<any> {

    return this.http.post(this.loginUrl, {
        username,
        password
      }, this.httpOptions);
    /*.pipe(
      tap((token : Token) => this.log(`login user`)),
      catchError(this.handleError<Token>('login'))
    );*/
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(this.registerUrl, {
      username,
      email,
      password
    }, this.httpOptions);
  }

}
