import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { User } from '../models/User';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

constructor(private http: HttpClient) { }

private backUrl = environment.apiURL;
private loginUrl = '/auth/login';
private registerUrl = '/auth/register';

httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
// Access-Control-Request-Headers


// KO --> Back
getUsers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:4000/");
}

// ok
login(username: string, password: string): Observable<any> {

    return this.http.post(this.backUrl + this.loginUrl, {
        username,
        password
      }, this.httpOptions);
  }

  // ok
  register(username: string, password: string, email: string): Observable<any> {
    return this.http.post(this.backUrl + this.registerUrl, {
      username,
      email,
      password
    }, this.httpOptions);
  }

}
