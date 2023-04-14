import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NewUserModel } from 'src/domain/interfaces/userInterface/newUser.model';


import { environment } from 'src/environments/environment';
import { StoreModel } from 'src/domain/interfaces/storeInterface/store.model';
import { StoreRepository } from 'src/domain/repositories/store.repository';
import { NewStoreModel } from 'src/domain/interfaces/storeInterface/newStore.model';

@Injectable({
    providedIn: 'root',
})
export class StoreImplementationRepository extends StoreRepository {

    constructor(private readonly httpClient: HttpClient,private router: Router, private afAuth: AngularFireAuth) {
        super();
    }

    getStoreAsync(): Observable<StoreModel[]> {
        return this.httpClient.get<StoreModel[]>(environment.urlStore)
          }
    createStoreAsync(store: NewStoreModel): Observable<NewStoreModel> {
        return this.httpClient.post<NewStoreModel>(environment.urlStore, store)
    }

    SignOut() {
      return this.afAuth.signOut().then(() => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.router.navigate(['login']);
      });
  }
}
