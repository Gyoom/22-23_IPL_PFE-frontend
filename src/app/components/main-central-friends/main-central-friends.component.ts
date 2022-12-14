import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main-central-friends',
  templateUrl: './main-central-friends.component.html',
  styleUrls: ['./main-central-friends.component.css']
})
export class MainCentralFriendsComponent implements OnInit {

  constructor(
    private userService : UserService,
    private tokenStorage: TokenStorageService
  ) { }
;
  public friends:any[] = [];
  public error = '';

  ngOnInit() {
    this.getAllFriends();
  }

  getAllFriends() {
    this.userService.getFriends(this.tokenStorage.getUser().username).subscribe(
      data => {
        this.friends = data;
      },
      err => {
        this.error = err.error.message;
      }
    );
  }
}
