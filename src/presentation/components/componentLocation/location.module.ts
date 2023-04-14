import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetLocationComponent } from './getLocation/getLocation/getLocation.component';
import { CreateLocationComponent } from './createLocation/createLocation/createLocation.component';
import { LocationRoutes } from './location.module.routing';
import { LocationModule } from 'src/data/repositories/location/location.module';


@NgModule({
  declarations: [
    GetLocationComponent,
    CreateLocationComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    LocationRoutes,
    HttpClientModule,
    ReactiveFormsModule,
    LocationModule

  ]
})
export class Location {}
