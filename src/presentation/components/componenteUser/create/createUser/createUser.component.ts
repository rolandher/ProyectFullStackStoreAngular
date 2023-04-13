import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserImplementationRepository } from 'src/data/repositories/user/user-implementation.repository';
import { NewUserModel } from 'src/domain/interfaces/newUser.model';
import { UserModel } from 'src/domain/interfaces/user.model';
import { CreateUserProfileUseCase } from 'src/domain/usecases/create-user-profile.usecase';


@Component({
  selector: 'app-createUser',
  templateUrl: './createUser.component.html',
  styleUrls: ['./createUser.component.css']
})
export class CrearUserComponent {
  frmFormulario : FormGroup;
  user: UserModel[];

  constructor(private createUserProfileUseCase: CreateUserProfileUseCase, private router: Router){
    this.user = [],
    this.frmFormulario = new FormGroup({
      user_id: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(10)
      ]),
      firebase_id: new FormControl('', [
        Validators.required,
        Validators.minLength(41),
        Validators.maxLength(45)
      ]),
      names: new FormControl('', [
        Validators.required,
        Validators.minLength(50),
        Validators.maxLength(50)
      ]),
      surName: new FormControl('', [
        Validators.required,
        Validators.minLength(50),
        Validators.maxLength(50)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(50),
        Validators.maxLength(100)
      ]),
      phone : new FormControl('', [
        Validators.required,
        Validators.minLength(10),
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

  createUser(): void {
    this.frmFormulario.get('isCompleted')?.setValue(JSON.parse(this.frmFormulario.get('isCompleted')?.value));
    console.log(this.frmFormulario.getRawValue());
    this.createUserProfileUseCase.execute(this.frmFormulario.getRawValue()).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/']);
      }
  })
}


}
