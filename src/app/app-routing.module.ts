import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UtilisateursComponent } from './components/utilisateurs/utilisateurs.component';
import { PageNoFoundComponent } from './components/PageNoFound/PageNoFound.component';
import { HomepageComponent } from './components/homepage/homepage.component';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'utilisateurs', component: UtilisateursComponent},
  { path: '**', component: PageNoFoundComponent },
  {path: 'homepage', component: HomepageComponent} //ajout pathmatch ? changer default path ?
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
