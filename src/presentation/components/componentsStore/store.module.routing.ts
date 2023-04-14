import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetStoreComponent } from './getStore/getStore/getStore.component';
import { CreateStoreComponent } from './createStore/createStore/createStore.component';
import { LayoutsComponent } from 'src/presentation/design/layouts/layouts.component';



//component user

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: 'getStore',
        component: GetStoreComponent,
      },
      {
        path: 'createStore',
        component: CreateStoreComponent,
      },

    ],
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutes {}
