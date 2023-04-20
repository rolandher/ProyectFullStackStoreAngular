import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { NewUserModel } from 'src/domain/interfaces/userInterface/newUser.model';
import { UserModel } from 'src/domain/interfaces/userInterface/user.model';
import { CreateUserProfileUseCase } from 'src/domain/usecases/userCases/create-user-profile.usecase';
import { DeleteUserProfileUseCase } from 'src/domain/usecases/userCases/delete-user-profile.usecase';
import { GetUserProfileUseCase } from 'src/domain/usecases/userCases/get-user-profile.usecase';
import { UpdateUserProfileUseCase } from 'src/domain/usecases/userCases/update-user-profile.usecase';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  userList : UserModel[];
  userToCreate: NewUserModel[];
  frmFormulario : FormGroup;
  empty : boolean;
  id?: string;
  showMessage: boolean = false;
  message: string = '';


  constructor(private getUserUseCase: GetUserProfileUseCase ,
    private createUserUseCase: CreateUserProfileUseCase, private updateUserUseCase: UpdateUserProfileUseCase,
    private deleteUserUseCase: DeleteUserProfileUseCase ,private router: Router){
    this.userList = new Array<UserModel>();
    this.empty = false;
    this.userToCreate = [];
    this.frmFormulario = new FormGroup({
      user_Id: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(45)
      ]),
      firebase_Id: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),
      names: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),
      surNames: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),
      gender: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),
      state: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),
    });
  }
      getUser() {
        this.getUserUseCase.execute().subscribe({
        next: (data) => {
          this.userList = data;
          this.empty = false;
          console.log(this.userList);
        },
        error: (err) => {
          console.log(err);
        this.empty = true;
        this.router.navigate(['main']);
      },
    });
  }

  createUser(){
    this.frmFormulario.get('state')?.setValue(JSON.parse(this.frmFormulario.get('state')?.value));
    console.log(this.frmFormulario.getRawValue())
    this.createUserUseCase.execute(this.frmFormulario.getRawValue()).subscribe({
      next:(Item) =>{
        console.log(Item);
        this.message = 'User created successfully';
        this.showMessage = true;
        this.frmFormulario.reset();
        setTimeout(() => {
          this.message = '';
          this.showMessage = false;
          this.getUser();
        }, 3000);

      }
    })
  }
  updateUser() {
    this.frmFormulario.get('state')?.setValue(JSON.parse(this.frmFormulario.get('state')?.value));
    console.log(this.frmFormulario.getRawValue())
    this.updateUserUseCase.execute(this.frmFormulario.getRawValue()).subscribe({
      next:(Item) =>{
        console.log(Item);
        this.message = 'user updated successfully';
        this.showMessage = true;
        this.frmFormulario.reset();
        setTimeout(() => {
          this.message = '';
          this.showMessage = false;
          this.getUser();
        }, 3000);
      }
    })
  }
  deleteUser() {
    console.log(this.frmFormulario.get('user_Id')?.value);
    this.deleteUserUseCase.execute(this.frmFormulario.get('user_Id')?.value).subscribe({
    next:(Item) =>{
      console.log(Item);
        this.message = 'user State successfully';
        this.showMessage = true;
        this.frmFormulario.reset();
        setTimeout(() => {
          this.message = '';
          this.showMessage = false;
          this.getUser();
        }, 3000);
    }
  })
}
}


