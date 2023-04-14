import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdmonstoreRoutes } from './admonstore.module.routing';


import { FooterComponent } from '../../design/footer/footer.component';
import { HeaderComponent } from '../../design/header/header.component';
import { MiddleComponent } from '../../design/middle/middle.component';
import { DashboardComponent } from '../../Login/dashboard/dashboard.component';
import { LoginUserComponent } from '../../Login/loginUser/loginUser.component';
import { LayoutsComponent } from '../../design/layouts/layouts.component';
import { DataModule } from 'src/data/data.module';
import { GetUserComponent } from './get/getUser/getUser.component';
import { CrearUserComponent } from './create/createUser/createUser.component';
import { UpdateUserComponent } from './update/updateUser/updateUser.component';
import { DeleteUserComponent } from './delete/deleteUser/deleteUser.component';



@NgModule({
  declarations: [
    GetUserComponent,
    CrearUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
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
    DataModule,

  ]
})
export class Admonstore {}
