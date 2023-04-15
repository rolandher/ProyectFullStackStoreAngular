import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiddleComponent } from './middle/middle.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [
    LayoutsComponent,
    MiddleComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
