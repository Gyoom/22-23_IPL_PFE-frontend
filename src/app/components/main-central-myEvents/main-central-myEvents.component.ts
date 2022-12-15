import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main-central-myevents',
  templateUrl: './main-central-myEvents.component.html',
  styleUrls: ['./main-central-myEvents.component.css']
})
export class MainCentralMyEventsComponent implements OnInit {

  constructor(
    private eventService : EventService,
    private userService: UserService,
    private tokenStorage : TokenStorageService
  ) { }

  public events: any[] = [];
  public friends: any[] = [];
  public error = '';
  ngOnInit() {
    this.getPersonnals();
    this.getAllFriends();
  }

  getPersonnals() {
    this.eventService.getPersonnals(this.tokenStorage.getUser().username).subscribe(
      data => {
        this.events = data;
        this.sortEvents();
      },
      err => {
        this.error = err.error.message;
      }
    );
  }

  sortEvents() {
    this.events = this.events.sort(function compare(a, b) {
      if ( new Date(a["_fields"][0]["properties"]["creation_date"]) > new Date(b["_fields"][0]["properties"]["creation_date"]))
         return -1;
      if (new Date(a["_fields"][0]["properties"]["creation_date"]) < new Date(b["_fields"][0]["properties"]["creation_date"]) )
         return 1;
      return 0;
    });
  }

  getAllFriends() {
    this.userService.getFriends(this.tokenStorage.getUser().username).subscribe(
      data => {
        this.friends = data;
        this.sortFriends();
      },
      err => {
        this.error = err.error.message;
      }
    );
  }

  sortFriends() {
   const a : any[] = [];
   this.friends.forEach(friend =>
      a.push(friend["_fields"][0])
    )
    this.friends = a;
    console.log(this.friends)
  }

  participate(id:string) {
    this.eventService.join(this.tokenStorage.getUser().username, id).subscribe(
      data => {
        window.location.reload();
      },
      err => {
        this.error = err.error.message;
      }
    );
  }

  invite(username:string, id:string) {
    this.eventService.invite(this.tokenStorage.getUser().username, username, id).subscribe(
      data => {

      },
      err => {
        this.error = err.error.message;
      }
    );

  }
}
