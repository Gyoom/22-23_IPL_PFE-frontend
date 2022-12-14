import { Component, OnInit } from '@angular/core';

import { evenements } from 'src/app/models/evenements';
import { EventService } from 'src/app/services/event.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-main-central-events',
  templateUrl: './main-central-events.component.html',
  styleUrls: ['./main-central-events.component.css']
})
export class MainCentralEventsComponent implements OnInit {

  constructor(
    private eventService : EventService,
    private tokenStorage : TokenStorageService
  ) { }

  public events = [];
  public error = '';
  ngOnInit() {
    this.eventService.getAll().subscribe(
      data => {
        this.events = data;
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
      if ( new Date(a["_fields"][0]["properties"]["starting_date"]) < new Date(b["_fields"][0]["properties"]["starting_date"]))
         return -1;
      if (new Date(a["_fields"][0]["properties"]["starting_date"]) > new Date(b["_fields"][0]["properties"]["starting_date"]) )
         return 1;
      return 0;
    });
  }

  participate(id:string) {
    this.eventService.register(this.tokenStorage.getUser().username, id).subscribe(
      data => {
        window.location.reload();
      },
      err => {
        this.error = err.error.message;
      }
    );
  }

}
