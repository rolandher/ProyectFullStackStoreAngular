import { Component } from '@angular/core';
import { GetUserProfileUseCase } from 'src/domain/usecases/userCases/get-user-profile.usecase';

@Component({
  selector: 'sofkaU-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: any;

  constructor (){
    this.title = 'AdmonStore';
  }
}

