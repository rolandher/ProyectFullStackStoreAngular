import { Component } from '@angular/core';
import { AuthService } from 'src/presentation/Login/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private readonly authService: AuthService) {}

  logout(): void {
    this.authService.SignOut();
  }

}
