import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataModule } from 'src/data/data.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { LoginUserComponent } from 'src/presentation/Login/loginUser/loginUser.component';
import { DashboardComponent } from 'src/presentation/Login/dashboard/dashboard.component';


@NgModule({
  declarations: [LoginUserComponent, DashboardComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    DataModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
