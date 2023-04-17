import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentStoreMainComponent } from './componentStoreMain/componentStoreMain/componentStoreMain.component';
import { StoreComponent } from './componentsStore/store/store.component';
import { LocationComponent } from './componentLocation/location/location.component';
import { ProductComponent } from './componentProduct/product/product.component';
import { UserComponent } from './componentUser/user/user.component';



//component user

const routes: Routes = [
  {
    path : '',
    component : ComponentStoreMainComponent,
    children: [
      {
        path: 'store',
        component: StoreComponent
      },
      {
        path: 'location',
        component: LocationComponent
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: '**',
        redirectTo: 'store'
      }
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutes {}
