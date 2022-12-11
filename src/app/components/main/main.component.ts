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

  ngOnInit() {
    if (!this.tokenStorage.getToken()) {
      this.router.navigate(['/login']);
    }
  }

  logOut() {
    this.tokenStorage.signOut();
    this.router.navigate(['/login']);
  }

}
