import { Component } from '@angular/core';
import { GetUserProfileUseCase } from 'src/domain/usecases/get-user-profile.usecase';

@Component({
  selector: 'sofkaU-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private users: GetUserProfileUseCase) { }

  getAllUsers() {
    this.users.execute().subscribe(data => {
      console.log(data);
    });
  }

}

