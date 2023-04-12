import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetUserComponent } from './components/componenteUser/get/getUser/getUser.component';
import { CrearUserComponent } from './components/componenteUser/create/createUser/createUser.component';
import { UpdateUserComponent } from './components/componenteUser/update/updateUser/updateUser.component';
import { DeleteUserComponent } from './components/componenteUser/delete/deleteUser/deleteUser.component';
import { LayoutsComponent } from './layouts/layouts/layouts.component';


//componentes


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
