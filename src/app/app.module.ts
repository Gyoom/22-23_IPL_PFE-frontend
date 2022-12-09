import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

// Component Manager

@NgModule({
  declarations: [ // All Components
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule, // Browser link
    AppRoutingModule // Routee
  ],
  providers: [],
  bootstrap: [AppComponent] // component who use app-root as selector
})
export class AppModule { }
