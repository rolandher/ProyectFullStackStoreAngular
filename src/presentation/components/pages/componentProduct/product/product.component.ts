import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewProductModel } from 'src/domain/interfaces/productInterface/NewProduct.model';
import { ProductModel } from 'src/domain/interfaces/productInterface/product.model';
import { StockProduct } from 'src/domain/interfaces/productInterface/stockProduct.model';
import { UpdateState } from 'src/domain/interfaces/productInterface/updateState';
import { AddStockProductProfileUseCase } from 'src/domain/usecases/productCases/addStock-product-profile.usecase';
import { CreateProductProfileUseCase } from 'src/domain/usecases/productCases/create-product-profile.usecase';
import { GetProductProfileUseCase } from 'src/domain/usecases/productCases/get-product-profile.usecase';

import { SubtractStockProductProfileUseCase } from 'src/domain/usecases/productCases/substrackStock-product.profile.usecase';
import { UpdateStateProfileUseCase } from 'src/domain/usecases/productCases/updateState-product-profile.usecase';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  productList : ProductModel[];
  productToCreate: NewProductModel[];
  frmFormulario : FormGroup;
  update?: UpdateState;
  stock? : StockProduct

  constructor(private getProductUseCase: GetProductProfileUseCase, private createProductUseCase: CreateProductProfileUseCase,
    private updateStateProfileUseCase: UpdateStateProfileUseCase, private addStockProductProfileUseCase: AddStockProductProfileUseCase,
    private subtractStockProductProfileUseCase: SubtractStockProductProfileUseCase,
     private router: Router){
    this.productList = new Array<ProductModel>();
    this.productToCreate = [];
    this.frmFormulario = new FormGroup({
      id_Store: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(45)
      ]),

      product_Id: new FormControl('', [
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
      price: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)

      ]),
      stock: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ]),
      admissionDate: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ]),
      state: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
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

  createProduct() {
    this.frmFormulario.get('state')?.setValue(JSON.parse(this.frmFormulario.get('state')?.value));
    console.log(this.frmFormulario.getRawValue())
    this.createProductUseCase.execute(this.frmFormulario.getRawValue()).subscribe({
      next:(Item) =>{
        console.log(Item);
        this.router.navigate(['main']);
      },
    }
    );
  }

  updateState() {
    console.log(this.frmFormulario.get('state')?.value);
    console.log ('true' === this.frmFormulario.get('state')?.value);
    this.update = {
      product_Id: parseInt( this.frmFormulario.get('product_Id')?.value),
      state: ('true' === this.frmFormulario.get('state')?.value)};

    this.updateStateProfileUseCase.execute(this.update
    ).subscribe({
      next:(Item) =>{
        console.log(Item);
        this.router.navigate(['main']);
      },
    });
  }

  addStock() {
    this.stock = {
      product_Id: this.frmFormulario.get('product_Id')?.value,
      stock: this.frmFormulario.get('stock')?.value};
    this.addStockProductProfileUseCase.execute(this.stock
    ).subscribe({
      next:(Item) =>{
        console.log(Item);
        this.router.navigate(['main']);
      },
    });
  }

  subtractStock() {
    this.stock = {
      product_Id: this.frmFormulario.get('product_Id')?.value,
      stock: this.frmFormulario.get('stock')?.value};
    this.subtractStockProductProfileUseCase.execute(this.stock
    ).subscribe({
      next:(Item) =>{
        console.log(Item);
        this.router.navigate(['main']);
      },
    });
  }


}

