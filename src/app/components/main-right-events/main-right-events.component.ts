import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-main-right-events',
  templateUrl: './main-right-events.component.html',
  styleUrls: ['./main-right-events.component.css']
})
export class MainRightEventsComponent implements OnInit {

  constructor(
    private eventService : EventService,
    private tokenStorage: TokenStorageService
  ) { }

  public registeredEvents: any[] = [];
  public noEvents = 0;
  public error = '';

  ngOnInit() {
    this.getRegisteredEvent();
  }

  getRegisteredEvent() {
    this.eventService.getRegistered(this.tokenStorage.getUser().username).subscribe(
      data => {
        this.registeredEvents = data["records"];
        this.filterEvents();
      },
      err => {
        this.error = err.error.message;
      }
    );
  }

  filterEvents() {
    console.log(this.registeredEvents);
    this.registeredEvents = this.registeredEvents.filter(event => new Date(event["_fields"][0]["properties"]["ending_date"]) > new Date()); // ok
    this.sortEvents();
  }

  sortEvents() {
    this.registeredEvents = this.registeredEvents.sort(function compare(a, b) {
      if ( new Date(a["_fields"][0]["properties"]["starting_date"]) < new Date(b["_fields"][0]["properties"]["starting_date"]))
         return -1;
      if (new Date(a["_fields"][0]["properties"]["starting_date"]) > new Date(b["_fields"][0]["properties"]["starting_date"]) )
         return 1;
      return 0;
    }); // ok
    this.noEvents = this.registeredEvents.length
  }
}
