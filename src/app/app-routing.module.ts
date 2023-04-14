import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo
} from '@angular/fire/compat/auth-guard';

import { DashboardComponent } from 'src/presentation/Login/dashboard/dashboard.component';
import { LoginUserComponent } from 'src/presentation/Login/loginUser/loginUser.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['admonstore']);


const routes: Routes = [
  {
    path: 'login', //http://localhost:7116/login
    component: LoginUserComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToDashboard },
  },
  {
    path: 'admonstore',
    loadChildren: () =>
      import('../presentation/components/componenteUser/admonstore.module').then(
        module => module.Admonstore),
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },

  },
  {
    path: 'admonstore/store',
    loadChildren: () =>
      import('../presentation/components/componentsStore/store.module').then(
        module => module.Store),
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
  },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
