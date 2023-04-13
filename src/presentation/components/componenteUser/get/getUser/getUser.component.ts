import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { UserList } from 'src/domain/interfaces/getUser.model';
import { UserModel } from 'src/domain/interfaces/user.model';
import { GetUserProfileUseCase } from 'src/domain/usecases/get-user-profile.usecase';

@Component({
  selector: 'app-getUser',
  templateUrl: './getUser.component.html',
  styleUrls: ['./getUser.component.css']
})
export class GetUserComponent implements OnInit {
  userList : UserModel[];
  empty : boolean;

  constructor(private getUserProfileUseCase: GetUserProfileUseCase) {
    this.userList = [];
    this.empty = false;
  }

  ngOnInit() {
      this.getUserProfileUseCase.execute().subscribe({
      next: (data) => {
        this.userList = data;
        this.empty = false;
        console.log(this.userList);
      },
      error: (err) => {
        console.log(err);
      this.empty = true;
      },
    });
  }
}




