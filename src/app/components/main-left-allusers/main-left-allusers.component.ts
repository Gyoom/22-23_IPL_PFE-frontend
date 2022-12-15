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
  public allButFriends:any[] = [];
  public error = '';

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAll().subscribe(
      data => {
        this.allUsers = data;
        this.getAllButFriends();
      },
      err => {
        this.error = err.error.message;
      }
    );
  }

  getAllButFriends() {
    this.userService.getAllButFriends(this.tokenStorage.getUser().username).subscribe(
      data => {
        this.allButFriends = data;
        this.userSorting();
      },
      err => {
        this.error = err.error.message;
      }
    );
  }


  userSorting() {
    const a: any[] = [];
    const b: any[] = [];
    this.allUsers = this.allUsers.filter(user => user["_fields"][0]["properties"]["username"] != this.tokenStorage.getUser().username);

    this.allUsers.forEach(user =>
        a.push(user["_fields"][0]["properties"]["username"])
    )
    this.allButFriends.forEach(user =>
      b.push(user["_fields"][0])
    )
    a.forEach(a1 =>
      {
        if (b.includes(a1)) {
          this.sortedUsers.push(
            {
              username: a1,
              friend: false
            }
          )
        } else {
          this.sortedUsers.push(
            {
              username: a1,
              friend: true
            }
          )
        }
      }
    )
  }

  ajouterAmi(username:string) {
    this.userService.addFriend(this.tokenStorage.getUser().username, username).subscribe(
        data => {
          window.location.reload();
        },
        err => {
          this.error = err.error.message;
        }
    );
  }

  supprimerAmi(username:string) {
    this.userService.deleteFriend(this.tokenStorage.getUser().username, username).subscribe(
        data => {
          window.location.reload();
        },
        err => {
          this.error = err.error.message;
        }
    );
  }
}
