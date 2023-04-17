import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentStoreMainComponent } from './componentStoreMain/componentStoreMain/componentStoreMain.component';

import { StoreRoutes } from './store.module.routing';

//store
import { StoreComponent } from './componentsStore/store/store.component';

//location
import { LocationComponent } from './componentLocation/location/location.component';

//product
import { ProductComponent } from './componentProduct/product/product.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [

    ComponentStoreMainComponent,
    StoreComponent,
    LocationComponent,
    ProductComponent

  ],
  imports: [
    CommonModule,
    StoreRoutes,

    ReactiveFormsModule,

  ]
})
export class Store {}
