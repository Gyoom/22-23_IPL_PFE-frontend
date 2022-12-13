import { Component } from '@angular/core';

import { utilisateurs } from 'src/app/models/User';

@Component({
  selector: 'app-main-left-allusers',
  templateUrl: './main-left-allusers.component.html',
  styleUrls: ['./main-left-allusers.component.css']
})
export class UtilisateursComponent {
  utilisateurs = utilisateurs;

  ajouterAmi() {
    window.alert('vous avez ajouté cette personne en ami !');
  }
}
