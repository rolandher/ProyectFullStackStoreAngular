import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutsComponent } from "./layouts/layouts.component";

const routes: Routes = [
  {
    path : '',
    component : LayoutsComponent,
    children: [
      {
        path: 'componenteStore', //http://localhost:7116/main/componenteStore
        loadChildren: () =>
          import('../components/pages/store.module').then(
            module => module.Store),
      },
      {
        path: '**',
        redirectTo: 'main'
      }
    ]
  }
]

@NgModule({
    imports: [RouterModule.forChild( routes )],
    exports: [RouterModule]
  })
  export class MainRoutingModule { }
