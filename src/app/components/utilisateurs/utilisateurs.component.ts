import { Component } from '@angular/core';

import { utilisateurs } from 'src/app/models/User';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent {
  utilisateurs = utilisateurs;

  ajouterAmi() {
    window.alert('vous avez ajouté cette personne en ami !');
  }
}
