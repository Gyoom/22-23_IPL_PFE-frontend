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

  public events = [];
  public noEvents = 0;
  public error = '';
  private test = '';

  ngOnInit() {
    this.eventService.getAll().subscribe(
      data => {
        this.events = data;
        this.events = this.events.filter(event => event["_fields"][0]["properties"]["username"] == this.tokenStorage.getUser().username); // ok

        this.events = this.events.filter(event => new Date(event["_fields"][0]["properties"]["ending_date"]) > new Date()); // ok
        this.events = this.events.sort(function compare(a, b) {
          if ( new Date(a["_fields"][0]["properties"]["starting_date"]) < new Date(b["_fields"][0]["properties"]["starting_date"]))
             return -1;
          if (new Date(a["_fields"][0]["properties"]["starting_date"]) > new Date(b["_fields"][0]["properties"]["starting_date"]) )
             return 1;
          return 0;
        }); // ok

       this.test = new Date().toUTCString();
       console.log(this.test);
        this.noEvents = this.events.length
      },
      err => {
        this.error = err.error.message;
      }
    );
  }
}
