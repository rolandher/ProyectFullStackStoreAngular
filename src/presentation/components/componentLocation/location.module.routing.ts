import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutsComponent } from 'src/presentation/design/layouts/layouts.component';
import { GetLocationComponent } from './getLocation/getLocation/getLocation.component';
import { CreateLocationComponent } from './createLocation/createLocation/createLocation.component';

//component user

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: 'getLocation',
        component: GetLocationComponent,
      },
      {
        path: 'createLocation',
        component: CreateLocationComponent,
      },

    ],
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationRoutes {}
