import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationModel } from 'src/domain/interfaces/locationInterface/location.model';
import { NewLocationModel } from 'src/domain/interfaces/locationInterface/newLocation.model';
import { CreateLocationProfileUseCase } from 'src/domain/usecases/locationCases/create-location-profile.usecase';
import { GetLocationProfileUseCase } from 'src/domain/usecases/locationCases/get-location-profile.usecase';
import { GetLocationByIdProfileUseCase } from 'src/domain/usecases/locationCases/getById-location-profile.usecase';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent  {

  locationList : LocationModel[];
  locationToCreate: NewLocationModel[];
  frmFormulario : FormGroup;

  constructor(private getlocationUseCase: GetLocationProfileUseCase, private createLocationUseCase: CreateLocationProfileUseCase, private router: Router){
    this.locationList = new Array<LocationModel>();
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
        Validators.maxLength(100)
      ]),
      location_Type: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ]),

    });
  }

  getLocation() {
    this.getlocationUseCase.execute().subscribe({
      next: (data) => {
        this.locationList = data;
        console.log(this.locationList);
      },
      error: (err) => {
        console.log(err);
        this.router.navigate(['main']);
      },
    });
  }

  createLocation(){
    console.log(this.frmFormulario.getRawValue())
    this.createLocationUseCase.execute(this.frmFormulario.getRawValue()).subscribe({
      next:(Item) =>{
        console.log(Item);
        this.router.navigate(['main']);
      },
    });
  }
  // getLocationById(){
  //   console.log(this.frmFormulario.getRawValue())
  //   this.getByIdLocation.execute(this.frmFormulario.getRawValue()).subscribe({
  //     next:(Item) =>{
  //       console.log(Item);
  //       this.router.navigate(['main']);
  //     },
  //   });


}
