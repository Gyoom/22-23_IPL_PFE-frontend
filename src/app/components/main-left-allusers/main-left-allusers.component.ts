import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private tokenStorage: TokenStorageService,
    public router: Router
  ) { }

  private allUsers:any[] = [];
  public sortedUsers:any[] = [];
  public friends:any[] = [];
  public error = '';

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAll().subscribe(
      data => {
        this.allUsers = data;
        this.getFriends();
      },
      err => {
        this.error = err.error.message;
      }
    );
  }

  getFriends() {
    this.userService.getFriends(this.tokenStorage.getUser().username).subscribe(
      data => {
        this.friends = data;
        this.userSorting();
      },
      err => {
        this.error = err.error.message;
      }
    );
  }


  userSorting() {
    this.allUsers = this.allUsers.filter(user => user["_fields"][0]["properties"]["username"] != this.tokenStorage.getUser().username);
    this.friends.forEach(friend =>
      {
        this.allUsers.forEach(user=>
          {
            if (friend["_fields"][0] != user["_fields"][0]["properties"]["username"]) {
              this.sortedUsers.push(user["_fields"][0]["properties"]);
            }
          }
        )
      }
    );
  }

  ajouterAmi(username:string) {
    this.userService.addFriend(this.tokenStorage.getUser().username, username).subscribe(
        data => {
          this.router.navigate(['/main']);
          window.alert('vous avez ajouté '+ username +' en tant qu\'ami !');
        },
        err => {
          this.error = err.error.message;
        }
    );
  }
}
