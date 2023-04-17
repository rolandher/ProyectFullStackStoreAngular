import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';


import { environment } from 'src/environments/environment';
import { ProductRepository } from 'src/domain/repositories/product.repository';
import { ProductModel } from 'src/domain/interfaces/productInterface/product.model';
import { UpdateState } from 'src/domain/interfaces/productInterface/updateState';

@Injectable({
    providedIn: 'root',
})
export class ProductImplementationRepository extends ProductRepository {

    constructor(private readonly httpClient: HttpClient,private router: Router, private afAuth: AngularFireAuth) {
        super();
    }

    getProductAsync(): Observable<ProductModel[]> {
        return this.httpClient.get<ProductModel[]>(environment.urlProduct)
    }

    createProductAsync(product: ProductModel): Observable<ProductModel> {
        return this.httpClient.post<ProductModel>(environment.urlProduct, product)
    }

    getProductByIdAsync(id: number): Observable<ProductModel> {
        return this.httpClient.get<ProductModel>(`${environment.urlProduct + "/GetProductById?id=", id}`)
    }

    updateStateAsync(updateState : UpdateState): Observable<ProductModel> {
        return this.httpClient.put<ProductModel>(`${environment.urlProduct +"/UpdateState"}`, updateState)
    }

    agregateStockProductAsync(id: number, stock: number): Observable<ProductModel> {
        return this.httpClient.put<ProductModel>(`${environment.urlProduct, id}`, stock)
    }

    subtractStockProductAsync(id: number, stock: number): Observable<ProductModel> {
        return this.httpClient.put<ProductModel>(`${environment.urlProduct, id}`, stock)
    }


    SignOut() {
      return this.afAuth.signOut().then(() => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.router.navigate(['login']);
      });
  }

}
