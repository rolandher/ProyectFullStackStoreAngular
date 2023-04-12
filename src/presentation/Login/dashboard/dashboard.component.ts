import { Component } from '@angular/core';
import { AuthService } from 'src/data/repositories/auth/auth.service';

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
