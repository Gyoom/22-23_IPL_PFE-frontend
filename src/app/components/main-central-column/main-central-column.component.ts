import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-central-column',
  templateUrl: './main-central-column.component.html',
  styleUrls: ['./main-central-column.component.css']
})
export class MainCentralColumnComponent implements OnInit {

  constructor(private router: Router) { }
  public r = this.router.url

  ngOnInit() {
  }

}
