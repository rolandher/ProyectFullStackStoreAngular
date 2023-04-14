import { Component } from '@angular/core';
import { AuthService } from 'src/presentation/Login/auth/auth.service';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent {

  options : string = 'MENU PRINCIPAL'
  routeGet: string[];
  routeCreate: string[];
  routeUpdate: string[];
  routeDelete: string[];


  constructor( private readonly authService: AuthService ){
    this.routeGet = ['./get']
    this.routeCreate = ['./create']
    this.routeUpdate = ['./update']
    this.routeDelete = ['./delete']

  }

  logout(): void {
    this.authService.SignOut();
  }

}
