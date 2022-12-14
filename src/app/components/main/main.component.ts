import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../../services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private tokenStorage: TokenStorageService,
    public router: Router
  ) { }

  public username = 'Pseudo';

  ngOnInit() {
    if (!this.tokenStorage.getToken()) {
      this.router.navigate(['/login']);
    } else {
      this.username = this.tokenStorage.getUser().username;
    }
  }

  logOut() {
    this.tokenStorage.signOut();
    this.router.navigate(['/login']);
  }

}
