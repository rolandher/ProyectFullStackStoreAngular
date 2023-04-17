import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetUserComponent } from './get/getUser/getUser.component';
import { CreateUserComponent } from './create/createUser/createUser.component';
import { UpdateUserComponent } from './update/updateUser/updateUser.component';
import { DeleteUserComponent } from './delete/deleteUser/deleteUser.component';
import { UserMainComponent } from './UserMain/UserMain/UserMain.component';

//component user

const routes: Routes = [
  {
    path: '',
    component: UserMainComponent,
    children: [
      {
        path: 'get',
        component: GetUserComponent,
      },
      {
        path: 'create',
        component: CreateUserComponent,
      },
      {
        path: 'update',
        component: UpdateUserComponent,
      },
      {
        path: 'delete',
        component: DeleteUserComponent
      },

    ],
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmonstoreRoutes {}

