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
getPublics(): Observable<any> {

  return this.http.get(this.backUrl + '/events/');
  }

  // ok
getRegistered(username:string): Observable<any> {

  return this.http.get(this.backUrl + '/events/register/' + username);
}

getPersonnals(username:string): Observable<any> {
  return this.http.get(this.backUrl + '/users/' + username + '/organized');
}

getInvitations (username:string): Observable<any> {
  return this.http.get(this.backUrl + '/invites/' + username + '/invited');
}


createOne(name: string, starting_date: Date, ending_date: Date,  creation_date: Date, description: string, username: string, statut: string): Observable<any> {
    return this.http.post(this.backUrl + this.createOneUrl, {
      name,
      starting_date,
      ending_date,
      creation_date,
      description,
      username,
      statut
    }, this.httpOptions);
  }

  join(username: string, id:string): Observable<any> {
    return this.http.put(this.backUrl + '/events/' + id + '/participate', {
      username
    }, this.httpOptions);
  }

  unJoin(username: string, id:string): Observable<any> {
    return this.http.put(this.backUrl + '/events/' + id + '/unparticipate', {
      username
    }, this.httpOptions);
  }

  invite (usernameInviting: string, usernameInvited: string, idEvent:string) {
    return this.http.post(this.backUrl + '/invites/invit', {
      usernameInviting,
      usernameInvited,
      idEvent
    }, this.httpOptions);
  }
}
