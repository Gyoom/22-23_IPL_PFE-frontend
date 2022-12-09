import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { RouterModule } from '@angular/router'; // pas sur ?

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UtilisateursComponent } from './components/utilisateurs/utilisateurs.component';
import { PageNoFoundComponent } from './components/PageNoFound/PageNoFound.component';
import { HomepageComponent } from './components/homepage/homepage.component';

// Component Manager

@NgModule({
  declarations: [ // All Components
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UtilisateursComponent,
    PageNoFoundComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule, // Browser link
    AppRoutingModule, // Routee
    /*RouterModule.forRoot([ //pas sur d'avoir besoin ?
      { path: '', component: UtilisateursComponent },
    ])*/
  ],
  providers: [],
  bootstrap: [AppComponent] // component who use app-root as selector
})
export class AppModule { }
