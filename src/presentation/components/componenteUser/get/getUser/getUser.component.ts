import { Component, OnInit } from '@angular/core';
import { UserImplementationRepository } from 'src/data/repositories/user/user-implementation.repository';
import { UserModel } from 'src/domain/models/user.model';

@Component({
  selector: 'app-getUser',
  templateUrl: './getUser.component.html',
  styleUrls: ['./getUser.component.css']
})
export class GetUserComponent {

  user : UserModel[];

  constructor(private readonly userService: UserImplementationRepository) {
    this.user= new Array<UserModel>();
  }
  ngOnInit(): void {
    this.userService.getUserAsync().subscribe({
      next: user => (this.user = user),
      error: err => console.log(err),
      complete: () => console.log('Complete')
    });
  }

}
