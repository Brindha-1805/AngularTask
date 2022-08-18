import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NagvbarComponent } from './nagvbar/nagvbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';

import { CommonModule } from '@angular/common';
import { CommonserviceService } from './commonservice.service';




@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    NagvbarComponent,
    DashboardComponent,
    
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ModalModule

    
    
    
  
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
