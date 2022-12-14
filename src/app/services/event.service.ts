import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class EventService {

constructor(private http: HttpClient) { }

private backUrl = environment.apiURL;
private getAllUrl = '/events/';
private createOneUrl = '/events/create';

httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
// ok
getAll(): Observable<any> {

  return this.http.get(this.backUrl + this.getAllUrl);
  }

  // ok
getRegistered(): Observable<any> {

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
