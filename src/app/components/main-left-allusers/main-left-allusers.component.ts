import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main-left-allusers',
  templateUrl: './main-left-allusers.component.html',
  styleUrls: ['./main-left-allusers.component.css']
})
export class UtilisateursComponent implements OnInit {

  constructor(
    private userService : UserService,
    private tokenStorage: TokenStorageService
  ) { }

  public users = [];
  public error = '';

  ngOnInit() {
    this.userService.getAll().subscribe(
      data => {
        this.users = data;
        this.users = this.users.filter(user => user["_fields"][0]["properties"]["username"] != this.tokenStorage.getUser().username);
      },
      err => {
        this.error = err.error.message;
      }
    );
  }

  ajouterAmi() {
    window.alert('vous avez ajouté cette personne en ami !');
  }
}
