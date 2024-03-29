import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-main-central-invites',
  templateUrl: './main-central-invites.component.html',
  styleUrls: ['./main-central-invites.component.css']
})
export class MainCentralInvitesComponent implements OnInit {

  constructor(
    private eventService : EventService,
    private tokenStorage : TokenStorageService
  ) { }

  public events = [];
  public error = '';
  public noEvents = 0;
  ngOnInit() {
      this.getInvitations();
  }

  getInvitations () {
    this.eventService.getInvitations(this.tokenStorage.getUser().username).subscribe(
      data => {
        this.events = data["records"];
        this.filterEvents();
      },
      err => {
        this.error = err.error.message;
      }
    );
  }

  filterEvents() {
    this.events = this.events.filter(event => new Date(event["_fields"][0]["properties"]["ending_date"]) > new Date()); // ok
    this.sortEvents();
  }

  sortEvents() {
    this.events = this.events.sort(function compare(a, b) {
      if ( new Date(a["_fields"][0]["properties"]["creation_date"]) > new Date(b["_fields"][0]["properties"]["creation_date"]))
         return -1;
      if (new Date(a["_fields"][0]["properties"]["creation_date"]) < new Date(b["_fields"][0]["properties"]["creation_date"]) )
         return 1;
      return 0;
    });

    this.noEvents = this.events.length
  }

  accepte(id:string) {
    this.eventService.join(this.tokenStorage.getUser().username, id).subscribe(
      data => {
        window.location.reload();
      },
      err => {
        this.error = err.error.message;
      }
    );
  }

  refuse(id:string) {
    this.eventService.unJoin(this.tokenStorage.getUser().username, id).subscribe(
      data => {
        window.location.reload();
      },
      err => {
        this.error = err.error.message;
      }
    );
  }

  formatDate (date:string):string {
    return date.substring(8, 10) + '-' + date.substring(5, 7) + '-' + date.substring(0, 4);
  }

  formatDateTime (date:string):string {
    return date.substring(8, 10) + '-' + date.substring(5, 7) + '-' + date.substring(0, 4) + ' à ' + date.substring(11, 13) + 'h' + date.substring(14, 16);
  }
}
