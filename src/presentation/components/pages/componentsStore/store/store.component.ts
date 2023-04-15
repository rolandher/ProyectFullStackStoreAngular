import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewStoreModel } from 'src/domain/interfaces/storeInterface/newStore.model';
import { StoreModel } from 'src/domain/interfaces/storeInterface/store.model';
import { CreateStoreProfileUseCase } from 'src/domain/usecases/storeCases/create-store-profile.usecase';
import { GetStoreProfileUseCase } from 'src/domain/usecases/storeCases/get-store-profile.usecase';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  storeList : StoreModel[];
  storeToCreate: NewStoreModel[];
  frmFormulario : FormGroup;

  constructor(private getStoreUseCase: GetStoreProfileUseCase, private createStoreUseCase: CreateStoreProfileUseCase, private router: Router){
    this.storeList = new Array<StoreModel>();
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
        Validators.maxLength(100)
      ]),

    });
  }

  getStore() {
    this.getStoreUseCase.execute().subscribe({
      next: (data) => {
        this.storeList = data;
        console.log(this.storeList);
      },
      error: (err) => {
        console.log(err);
        this.router.navigate(['main']);
      },
    });
  }

  createStore(){
    console.log(this.frmFormulario.getRawValue())
    this.createStoreUseCase.execute(this.frmFormulario.getRawValue()).subscribe({
      next:(Item) =>{
        console.log(Item);
        this.router.navigate(['main']);
      },
    }
    );
  }
}





