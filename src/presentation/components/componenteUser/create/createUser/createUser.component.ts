import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUserModel } from 'src/domain/interfaces/userInterface/newUser.model';
import { CreateUserProfileUseCase } from 'src/domain/usecases/userCases/create-user-profile.usecase';


@Component({
  selector: 'app-createUser',
  templateUrl: './createUser.component.html',
  styleUrls: ['./createUser.component.css']
})
export class CreateUserComponent {
  frmFormulario : FormGroup;
  userToCreate: NewUserModel[];

  constructor(private createUserProfileUseCase: CreateUserProfileUseCase, private router: Router){
    this.userToCreate = [];
    this.frmFormulario = new FormGroup({
      firebase_Id: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(45)
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
        Validators.maxLength(100)
      ]),
      phone : new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ]),
      gender : new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(9)
      ]),

      state: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ]),

    });
  }

  createUser(){
    this.frmFormulario.get('state')?.setValue(JSON.parse(this.frmFormulario.get('state')?.value));
    console.log(this.frmFormulario.getRawValue())
    this.createUserProfileUseCase.execute(this.frmFormulario.getRawValue()).subscribe({
      next:(Item) =>{
        console.log(Item);
        this.router.navigate(['admonstore']);
      }
    })
  }
}





