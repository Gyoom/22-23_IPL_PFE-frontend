import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


import { TokenStorageService } from '../../services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class LoginComponent implements OnInit {


  public isLoggedIn = false;
  public isLoginFailed = false;
  public errorMessage = '';

  constructor(
    private authService : AuthService,
    private tokenStorage: TokenStorageService,
    public router: Router
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.router.navigate(['/main']);
      //this.roles = this.tokenStorage.getUser().roles;
    }
  }

  login(username: string, password: string): void {

    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        //this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
