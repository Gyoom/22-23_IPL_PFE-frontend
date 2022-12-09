import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UtilisateursComponent } from './components/utilisateurs/utilisateurs.component';
import { PageNoFoundComponent } from './components/PageNoFound/PageNoFound.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProfilUtilisateurComponent } from './components/profil-utilisateur/profil-utilisateur.component';
import { utilisateurs } from './models/utilisateurs';

// Component Manager

@NgModule({
  declarations: [ // All Components
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UtilisateursComponent,
    PageNoFoundComponent,
    HomepageComponent,
    ProfilUtilisateurComponent
  ],
  imports: [
    BrowserModule, // Browser link
    AppRoutingModule, // Routee
    RouterModule.forRoot([ 
      { path: '', component: UtilisateursComponent },
      {path: 'utilisateurs/:utilisateurId', component: ProfilUtilisateurComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent] // component who use app-root as selector
})
export class AppModule { }
