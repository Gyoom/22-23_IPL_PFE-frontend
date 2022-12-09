import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>', // template ou templateUrl : component App only use is to call the router
  styleUrls: []
})
export class AppComponent {
  title = 'frontend-angular';
}
