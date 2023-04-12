import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UserEntity } from './entities/user-entity';
import { UserImplementationRepositoryMapper } from './mappers/user-repository.mapper';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { UserModel } from 'src/domain/models/user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NewUserModel } from 'src/domain/models/newUser.model';

@Injectable({
    providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {
    userMapper = new UserImplementationRepositoryMapper();

    constructor(private readonly httpClient: HttpClient,private router: Router, private afAuth: AngularFireAuth) {
        super();
    }

    getUserAsync(): Observable<UserModel> {
        return this.httpClient.get<UserModel>('https://localhost:7116/api/User')
            .pipe(map(this.userMapper.mapFrom));
    }

    createUserAsync(user: NewUserModel): Observable<NewUserModel> {
        return this.httpClient.post<UserEntity>('https://localhost:7116/api/User', user)
            .pipe(map(this.userMapper.mapFrom));
    }

    updateUserAsync(user: NewUserModel): Observable<NewUserModel> {
        return this.httpClient.put<UserEntity>('https://localhost:7116/api/User', user)
            .pipe(map(this.userMapper.mapFrom));
    }

    deleteUserAsync(id: string|null): Observable<UserModel> {
        return this.httpClient.delete<UserEntity>('https://localhost:7116/api/User' + id)
            .pipe(map(this.userMapper.mapFrom));
    }

    SignOut() {
      return this.afAuth.signOut().then(() => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.router.navigate(['login']);
      });
  }
}
