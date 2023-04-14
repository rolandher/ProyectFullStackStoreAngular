import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewStoreModel } from 'src/domain/interfaces/storeInterface/newStore.model';
import { CreateStoreProfileUseCase } from 'src/domain/usecases/storeCases/create-store-profile.usecase';

@Component({
  selector: 'app-createStore',
  templateUrl: './createStore.component.html',
  styleUrls: ['./createStore.component.css']
})
export class CreateStoreComponent  {
  frmFormulario : FormGroup;
  storeToCreate: NewStoreModel[];

  constructor(private createStoreProfileUseCase: CreateStoreProfileUseCase, private router: Router){
    this.storeToCreate = [];
    this.frmFormulario = new FormGroup({
        id_User: new FormControl('', [
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


    });
  }

  createStore(){
    console.log(this.frmFormulario.getRawValue())
    this.createStoreProfileUseCase.execute(this.frmFormulario.getRawValue()).subscribe({
      next:(Item) =>{
        console.log(Item);
        this.router.navigate(['admonstore']);
      }
    })
  }
}
