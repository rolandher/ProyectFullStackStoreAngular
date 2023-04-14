import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetLocationByIdProfileUseCase } from 'src/domain/usecases/locationCases/getById-location-profile.usecase';

@Component({
  selector: 'app-getIdLocation',
  templateUrl: './getIdLocation.component.html',
  styleUrls: ['./getIdLocation.component.css']
})
export class GetIdLocationComponent {

  frmFormulario : FormGroup;
  id!: number;

  constructor(private getLocationByIdProfileUseCase: GetLocationByIdProfileUseCase, private router: Router) {
    this.frmFormulario = new FormGroup({
        id: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(45)
      ])
    });
  }

  getId(){
    this.id = this.frmFormulario.getRawValue().id;
    console.log(this.id);
     this.getLocationByIdProfileUseCase.execute(this.id).subscribe({
        next: () => {
          this.router.navigate(['admonstore']);
        }
    });
  }
}

