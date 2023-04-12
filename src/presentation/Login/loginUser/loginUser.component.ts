import { Component } from '@angular/core';
import { AuthService } from 'src/data/repositories/auth/auth.service';

@Component({
  selector: 'app-loginUser',
  templateUrl: './loginUser.component.html',
  styleUrls: ['./loginUser.component.css']
})
export class LoginUserComponent {

  constructor(private readonly authService: AuthService) {}

  auth(): void {
    this.authService.GoogleAuth();
  }

}
