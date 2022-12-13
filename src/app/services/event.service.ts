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
private createOneUrl = '/events/create';

httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
// ok
getAll(): Observable<any> {

  return this.http.get(this.backUrl + this.getAllUrl);
  }


createOne(name: string, starting_date: Date, ending_date: Date, description: string, username: string): Observable<any> {
    return this.http.post(this.backUrl + this.createOneUrl, {
      name,
      starting_date,
      ending_date,
      description,
      username
    }, this.httpOptions);
  }

}
