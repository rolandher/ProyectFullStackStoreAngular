import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetStoreComponent } from './getStore/getStore/getStore.component';
import { CreateStoreComponent } from './createStore/createStore/createStore.component';
import { StoreRoutes } from './store.module.routing';


@NgModule({
  declarations: [
    GetStoreComponent,
    CreateStoreComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreRoutes,
    HttpClientModule,
    ReactiveFormsModule,

  ]
})
export class Store {}
