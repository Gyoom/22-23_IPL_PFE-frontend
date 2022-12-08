import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({ //pour enregistrer tout les composants utilises pour notre app
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [ //pour enregistrer tout les modules utilises par l'app
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
