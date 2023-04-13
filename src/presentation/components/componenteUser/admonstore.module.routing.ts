import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetUserComponent } from './get/getUser/getUser.component';
import { CrearUserComponent } from './create/createUser/createUser.component';
import { UpdateUserComponent } from './update/updateUser/updateUser.component';
import { DeleteUserComponent } from './delete/deleteUser/deleteUser.component';
import { LayoutsComponent } from '../../design/layouts/layouts.component';


//component user

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: 'get',
        component: GetUserComponent,
      },
      {
        path: 'create',
        component: CrearUserComponent,
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
