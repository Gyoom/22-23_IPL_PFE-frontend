import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.css']
})
export class RegisterComponent implements OnInit {

  public isLoggedIn = false;
  public isLoginFailed = false;
  public isRegisterFailed = false;
  public errorMessage = '';

  constructor(
    private authService : AuthService,
    private tokenStorage: TokenStorageService,
    public router: Router
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.router.navigate(['/main']);
      //this.roles = this.tokenStorage.getUser().roles;
    }
  }

  register (username: string, password: string, passwordConfirm: string, email: string) {
    this.errorMessage = '';
    this.isRegisterFailed = false;
    if (username == "") {
      this.errorMessage += 'username à remplir';
      this.isRegisterFailed = true;
    }
    if (password == "") {
      this.errorMessage += '\npassword à remplir';
      this.isRegisterFailed = true;
    }
    if (password == "") {
      this.errorMessage += 'email à remplir\n';
      this.isRegisterFailed = true;
    }
    if (password != passwordConfirm) {
      this.errorMessage += 'passwords différents\n';
      this.isRegisterFailed = true;
    }
    if (this.isRegisterFailed) return;


    this.authService.register(username, password, email).subscribe(
      data => {
        //this.tokenStorage.saveToken(data.accessToken);
        //this.tokenStorage.saveUser(data);

        this.router.navigate(['/login']);
      },
      err => {
        this.errorMessage += err.error.message;
        this.isRegisterFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
