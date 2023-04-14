import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NewUserModel } from 'src/domain/interfaces/userInterface/newUser.model';
import { UserModel } from 'src/domain/interfaces/userInterface/user.model';
import { DeleteUserProfileUseCase } from 'src/domain/usecases/userCases/delete-user-profile.usecase';

@Component({
  selector: 'app-deleteUser',
  templateUrl: './deleteUser.component.html',
  styleUrls: ['./deleteUser.component.css']
})
export class DeleteUserComponent {

  frmFormulario : FormGroup;
  user_id!: string;

  constructor(private readonly deleteUserProfileUseCase: DeleteUserProfileUseCase, private router: Router ){
      this.frmFormulario = new FormGroup({
      user_id: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(45)
      ])
    });
  }

  deleteUser(id : string){
    this.user_id = this.frmFormulario.getRawValue().user_id;
    console.log(this.user_id);
     this.deleteUserProfileUseCase.execute(this.user_id).subscribe({
        next: () => {
          this.router.navigate(['admonstore']);
        }
    });
  }

}








