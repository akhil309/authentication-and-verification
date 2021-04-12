import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './../app/_components/home/home.component';
import { RegisterComponent } from './../app/_components/register/register.component'
import { LoginComponent } from './../app/_components/login/login.component';
import { AuthGuard } from './../app/_helpers/auth.guard';
import { AccountsComponent } from './_components/accounts/accounts.component';
// , canActivate: [AuthGuard]

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path : 'register', component : RegisterComponent},
  {
    path : 'accounts', 
      children : 
        [
          { path : 'verify-email', component : AccountsComponent}
        ]
  },

  // otherwise redirect to home
  { path: '**', component: HomeComponent, canActivate: [AuthGuard] }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
