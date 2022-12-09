import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UtilisateursComponent } from './components/utilisateurs/utilisateurs.component';
import { PageNoFoundComponent } from './components/PageNoFound/PageNoFound.component';
import { MainComponent } from './components/main/main.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProfilUtilisateurComponent } from './components/profil-utilisateur/profil-utilisateur.component';
import { ListeEvenementsComponent } from './components/liste-evenements/liste-evenements.component';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'main', redirectTo:'main/home', pathMatch: 'full'},
  {path:'main/home', component: MainComponent},
  {path:'main/events', component: MainComponent},
  {path:'utilisateurs', component: UtilisateursComponent},
  {path: '**', component: PageNoFoundComponent },
  {path: 'homepage', component: HomepageComponent}, //ajout pathmatch ? changer default path ?
  //{path: 'utilisateur/:id', component: ProfilUtilisateurComponent},
  {path: 'liste-evenements', component: ListeEvenementsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
