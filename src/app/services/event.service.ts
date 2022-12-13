import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import { User } from '../models/User';

@Injectable({
    providedIn: 'root',
})
export class EventService {

constructor(private http: HttpClient) { }

private backUrl = 'http://localhost:4000'
private getAllUrl = '/events/';
private createOneUrl = '/auth/register';

httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


getAll(): Observable<any> {

  return this.http.get(this.backUrl + this.getAllUrl);
  }

  // ok
createOne(username: string, password: string, email: string,): Observable<any> {
    return this.http.post(this.backUrl + this.createOneUrl, {
      username,
      email,
      password
    }, this.httpOptions);
  }

}
