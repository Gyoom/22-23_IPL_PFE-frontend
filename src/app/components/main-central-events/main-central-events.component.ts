import { Component, OnInit } from '@angular/core';

import { evenements } from 'src/app/models/evenements';

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

  constructor() { }

  ngOnInit() {
  }

}
