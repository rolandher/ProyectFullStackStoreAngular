import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreModel } from 'src/domain/interfaces/storeInterface/store.model';
import { GetStoreProfileUseCase } from 'src/domain/usecases/storeCases/get-store-profile.usecase';

@Component({
  selector: 'app-getStore',
  templateUrl: './getStore.component.html',
  styleUrls: ['./getStore.component.css']
})
export class GetStoreComponent implements OnInit {
  storeList : StoreModel[];

  constructor(private getStoreProfileUseCase: GetStoreProfileUseCase, private router: Router) {
    this.storeList = [];

  }

  ngOnInit() {
      this.getStoreProfileUseCase.execute().subscribe({
      next: (data) => {
        this.storeList = data;
        console.log(this.storeList);
      },
      error: (err) => {
        console.log(err);
      this.router.navigate(['admonstore']);
      },
    });
  }
}
