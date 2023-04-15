import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewProductModel } from 'src/domain/interfaces/productInterface/NewProduct.model';
import { ProductModel } from 'src/domain/interfaces/productInterface/product.model';
import { GetProductProfileUseCase } from 'src/domain/usecases/productCases/get-product-profile.usecase';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  productList : ProductModel[];
  productToCreate: NewProductModel[];
  frmFormulario : FormGroup;

  constructor(private getProductUseCase: GetProductProfileUseCase, private router: Router){
    this.productList = new Array<ProductModel>();
    this.productToCreate = [];
    this.frmFormulario = new FormGroup({
      id_Store: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(45)
      ]),
    });
  }

  getProduct() {
    this.getProductUseCase.execute().subscribe({
      next: (data) => {
        this.productList = data;
        console.log(this.productList);
      },
      error: (err) => {
        console.log(err);
        this.router.navigate(['main']);
      },
    });
  }
}
