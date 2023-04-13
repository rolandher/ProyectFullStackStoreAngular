import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetUserComponent } from './get/getUser/getUser.component';
import { AdmonstoreRoutes } from './admonstore.module.routing';

import { CrearUserComponent } from './create/createUser/createUser.component';
import { FooterComponent } from '../../design/footer/footer.component';
import { HeaderComponent } from '../../design/header/header.component';
import { MiddleComponent } from '../../design/middle/middle.component';
import { DashboardComponent } from '../../Login/dashboard/dashboard.component';
import { LoginUserComponent } from '../../Login/loginUser/loginUser.component';
import { LayoutsComponent } from '../../design/layouts/layouts.component';



@NgModule({
  declarations: [
    GetUserComponent,
    CrearUserComponent,
    FooterComponent,
    HeaderComponent,
    MiddleComponent,
    LayoutsComponent,
    DashboardComponent,
    LoginUserComponent


  ],
  imports: [
    CommonModule,
    AdmonstoreRoutes,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ]
})
export class Admonstore {}
