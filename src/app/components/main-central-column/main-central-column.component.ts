import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-central-column',
  templateUrl: './main-central-column.component.html',
  styleUrls: ['./main-central-column.component.css']
})
export class MainCentralColumnComponent implements OnInit {

  constructor() { }
  public actualComposant = 'events';

  ngOnInit() {
  }

  change(newActualComposant : string) {
    this.actualComposant = newActualComposant;
  }

}
