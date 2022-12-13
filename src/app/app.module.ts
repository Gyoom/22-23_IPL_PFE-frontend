import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

// components imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth-login/auth-login.component';
import { RegisterComponent } from './components/auth-register/auth-register.component';
import { UtilisateursComponent } from './components/main-left-allusers/main-left-allusers.component';
import { PageNoFoundComponent } from './components/PageNoFound/PageNoFound.component';
import { MainComponent } from './components/main/main.component';
import { MainCentralColumnComponent } from './components/main-central-column/main-central-column.component';
import { MainCentralHomeComponent } from './components/main-central-home/main-central-home.component';
import { MainCentralEventsComponent } from './components/main-central-events/main-central-events.component';
import { ProfilUtilisateurComponent } from './components/profil-utilisateur/profil-utilisateur.component';
import { MainRightEventsComponent } from './components/main-right-events/main-right-events.component';
import { MainCentralFriendsComponent } from './components/main-central-friends/main-central-friends.component';
import { MainCentralMessagesComponent } from './components/main-central-messages/main-central-messages.component';


// Component Manager
@NgModule({
  declarations: [ // All Components
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UtilisateursComponent,
    PageNoFoundComponent,
    MainComponent,
    MainCentralColumnComponent,
    MainCentralHomeComponent,
    MainCentralEventsComponent,
    ProfilUtilisateurComponent,
    MainRightEventsComponent,
    MainCentralFriendsComponent,
    MainCentralMessagesComponent
  ],
  imports: [
    BrowserModule, // Browser link
    AppRoutingModule, // Router
    HttpClientModule, // http request
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent] // component who use app-root as selector
})
export class AppModule { }
