import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AuthenticationGuard} from './authentication.guard'; 



const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path: 'register',component:RegisterComponent,canActivate:[AuthenticationGuard]},
  { path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
   {path:'lazy',loadChildren:() => import('./lazy/lazy.module').then(m=> m.LazyModule )}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
