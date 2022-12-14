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

  public events: any[] = [];
  public registeredEvents: any[] = [];
  public filteredEvents: any[] = [];
  public noEvents = 0;
  public error = '';

  ngOnInit() {
    this.getAllEvents();
  }

  getAllEvents() {
    this.eventService.getAll().subscribe(
      data => {
        this.events = data;
        console.log(this.events);
        this.getRegisteredEvent();
      },
      err => {
        this.error = err.error.message;
      }
    );
  }

  getRegisteredEvent() {
    this.filterEvents();
  }

  filterEvents() {
    //this.events = this.events.filter(event => event["_fields"][0]["properties"]["username"] == this.tokenStorage.getUser().username); // ok
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
    }); // ok
    this.noEvents = this.events.length
  }
}
