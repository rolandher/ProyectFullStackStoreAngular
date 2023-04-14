import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/domain/interfaces/productInterface/product.model';
import { GetProductProfileUseCase } from 'src/domain/usecases/productCases/get-product-profile.usecase';

@Component({
  selector: 'app-getProduct',
  templateUrl: './getProduct.component.html',
  styleUrls: ['./getProduct.component.css']
})
export class GetProductComponent implements OnInit {
  productList : ProductModel[];

  constructor(private getProductProfileUseCase: GetProductProfileUseCase, private router: Router) {
    this.productList = [];
  }

  ngOnInit() {
      this.getProductProfileUseCase.execute().subscribe({
      next: (data) => {
        this.productList = data;
        console.log(this.productList);
      },
      error: (err) => {
        console.log(err);
      this.router.navigate(['admonstore']);
      },
    });
  }
}
