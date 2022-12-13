import { Component, OnInit } from '@angular/core';

import { evenements } from 'src/app/models/evenements';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-main-central-events',
  templateUrl: './main-central-events.component.html',
  styleUrls: ['./main-central-events.component.css']
})
export class MainCentralEventsComponent implements OnInit {
  evenements = evenements;

  /*ajouterAmi() {
    window.alert('vous avez ajouté cette personne en ami !');
  }*/

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
