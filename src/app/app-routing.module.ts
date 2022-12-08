import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UtilisateursComponent } from './components/utilisateurs/utilisateurs.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'utilisateurs', component: UtilisateursComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
