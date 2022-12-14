import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) { }

  private backUrl = environment.apiURL + '/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // ok
  getAll(): Observable<any> {
    return this.http.get(this.backUrl);
  }

  // ok
  getFriends(username:string): Observable<any> {
    return this.http.get(this.backUrl + '/friends/' +  username);
  }

  // ok
  addFriend(usernameSender: string, usernameReciever: string): Observable<any> {

    return this.http.post(this.backUrl + '/newfriends', {
        usernameSender,
        usernameReciever
      }, this.httpOptions);
  }
}
