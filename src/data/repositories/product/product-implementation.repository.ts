import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';


import { environment } from 'src/environments/environment';
import { ProductRepository } from 'src/domain/repositories/product.repository';
import { ProductModel } from 'src/domain/interfaces/productInterface/product.model';

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


    SignOut() {
      return this.afAuth.signOut().then(() => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.router.navigate(['login']);
      });
  }

}
