import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/domain/interfaces/userInterface/user.model';
import { UpdateUserProfileUseCase } from 'src/domain/usecases/userCases/update-user-profile.usecase';


@Component({
  selector: 'app-updateUser',
  templateUrl: './updateUser.component.html',
  styleUrls: ['./updateUser.component.css']
})
export class UpdateUserComponent {
  frmFormulario1 : FormGroup;
  userToUpdate: UserModel[];

  constructor(private updateUserProfileUseCase: UpdateUserProfileUseCase, private router: Router){
    this.userToUpdate = [];
    this.frmFormulario1 = new FormGroup({
       user_id: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(45)
      ]),

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

    updateUser() {
      this.frmFormulario1.get('state')?.setValue(JSON.parse(this.frmFormulario1.get('state')?.value));
      console.log(this.frmFormulario1.getRawValue())
      this.updateUserProfileUseCase.execute(this.frmFormulario1.getRawValue()).subscribe({
        next:(Item) =>{
          console.log(Item);
          this.router.navigate(['admonstore']);
        }
      })
    }
  }
