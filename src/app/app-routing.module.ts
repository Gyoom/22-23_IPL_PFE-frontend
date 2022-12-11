import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNoFoundComponent } from './components/PageNoFound/PageNoFound.component';
import { MainComponent } from './components/main/main.component';
//import { ProfilUtilisateurComponent } from './components/profil-utilisateur/profil-utilisateur.component';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'main', redirectTo:'main/home', pathMatch: 'full'},
  {path:'main/home', component: MainComponent},
  {path:'main/events', component: MainComponent},
  //{path: 'utilisateur/:id', component: ProfilUtilisateurComponent},

  {path: '**', component: PageNoFoundComponent }, // default path, doit etre en dernier !
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
