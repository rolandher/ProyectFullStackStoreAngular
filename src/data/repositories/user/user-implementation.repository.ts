import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NewUserModel } from 'src/domain/interfaces/userInterface/newUser.model';

import { UserModel } from 'src/domain/interfaces/userInterface/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {

    constructor(private readonly httpClient: HttpClient,private router: Router, private afAuth: AngularFireAuth) {
        super();
    }

    getUserAsync(): Observable<UserModel[]> {
        return this.httpClient.get<UserModel[]>(environment.urladmonStore)
          }
    createUserAsync(user: NewUserModel): Observable<NewUserModel> {
        return this.httpClient.post<NewUserModel>(environment.urladmonStore, user)
    }

    updateUserAsync(user: UserModel): Observable<UserModel> {
        return this.httpClient.put<UserModel>(environment.urladmonStore, user)
    }

    deleteUserAsync(id: string): Observable<UserModel> {
       return this.httpClient.delete<UserModel>(environment.urladmonStore + '/' + id)

    }

    SignOut() {
      return this.afAuth.signOut().then(() => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.router.navigate(['login']);
      });
  }
}
