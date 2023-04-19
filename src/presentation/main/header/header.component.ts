import { Component } from '@angular/core';
import { AuthService } from 'src/presentation/Login/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  // constructor( private readonly authService: AuthService ){

  // }

  // logout(): void {
  //   this.authService.SignOut();
  // }
}
