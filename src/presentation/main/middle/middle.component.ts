import { Component } from '@angular/core';
import { AuthService } from 'src/presentation/Login/auth/auth.service';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent {

   constructor( private readonly authService: AuthService ){

  }

  logout(): void {
    this.authService.SignOut();
  }

}
