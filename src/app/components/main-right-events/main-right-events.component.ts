import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-main-right-events',
  templateUrl: './main-right-events.component.html',
  styleUrls: ['./main-right-events.component.css']
})
export class MainRightEventsComponent implements OnInit {

  constructor(
    private eventService : EventService
  ) { }

  public events = [];
  public error = '';
  ngOnInit() {
    this.eventService.getAll().subscribe(
      data => {
        this.events = data;
      },
      err => {
        this.error = err.error.message;
      }
    );
  }

}
