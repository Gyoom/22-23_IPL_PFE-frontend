import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UtilisateursComponent } from './components/utilisateurs/utilisateurs.component';
import { PageNoFoundComponent } from './components/PageNoFound/PageNoFound.component';
import { MainComponent } from './components/main/main.component';
import { MainCentralHomeComponent } from './components/main-central-home/main-central-home.component';
import { MainCentralEventsComponent } from './components/main-central-events/main-central-events.component';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'main', redirectTo:'main/home', pathMatch: 'full'},
  {path:'main/home', component: MainComponent},
  {path:'main/events', component: MainComponent},
  {path:'utilisateurs', component: UtilisateursComponent},
  {path: '**', component: PageNoFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
