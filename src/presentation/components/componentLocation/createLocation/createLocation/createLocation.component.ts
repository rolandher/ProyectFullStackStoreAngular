import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewLocationModel } from 'src/domain/interfaces/locationInterface/newLocation.model';
import { CreateLocationProfileUseCase } from 'src/domain/usecases/locationCases/create-location-profile.usecase';

@Component({
  selector: 'app-createLocation',
  templateUrl: './createLocation.component.html',
  styleUrls: ['./createLocation.component.css']
})
export class CreateLocationComponent {
  frmFormulario : FormGroup;
  locationToCreate: NewLocationModel[];

  constructor(private createLocationProfileUseCase: CreateLocationProfileUseCase, private router: Router){
    this.locationToCreate = [];
    this.frmFormulario = new FormGroup({
        id_Store: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(45)
      ]),
      names: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),
      location_Type: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ])


    });
  }

  createLocation(){
    console.log(this.frmFormulario.getRawValue())
    this.createLocationProfileUseCase.execute(this.frmFormulario.getRawValue()).subscribe({
      next:(Item) =>{
        console.log(Item);
        this.router.navigate(['admonstore']);
      }
    })
  }
}
