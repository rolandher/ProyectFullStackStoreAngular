import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdmonstoreRoutes } from './admonstore.module.routing';

import { DataModule } from 'src/data/repositories/user/data.module';
import { GetUserComponent } from './get/getUser/getUser.component';
import { CreateUserComponent } from './create/createUser/createUser.component';
import { UpdateUserComponent } from './update/updateUser/updateUser.component';
import { DeleteUserComponent } from './delete/deleteUser/deleteUser.component';
import { UserMainComponent } from './UserMain/UserMain/UserMain.component';



@NgModule({
  declarations: [
    GetUserComponent,
    CreateUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    UserMainComponent,


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
export class AdmonstoreModule {}
