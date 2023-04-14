import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/domain/interfaces/userInterface/user.model';
import { GetUserProfileUseCase } from 'src/domain/usecases/userCases/get-user-profile.usecase';

@Component({
  selector: 'app-getUser',
  templateUrl: './getUser.component.html',
  styleUrls: ['./getUser.component.css']
})
export class GetUserComponent implements OnInit {
  userList : UserModel[];
  empty : boolean;

  constructor(private getUserProfileUseCase: GetUserProfileUseCase, private router: Router) {
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
      this.router.navigate(['admonstore']);
      },
    });
  }
}




