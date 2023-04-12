import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UserEntity } from './entities/user-entity';
import { UserImplementationRepositoryMapper } from './mappers/user-repository.mapper';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { UserModel } from 'src/domain/models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {
    userMapper = new UserImplementationRepositoryMapper();

    constructor(private http: HttpClient) {
        super();
    }

    getUserAsync(): Observable<UserModel> {
        return this.http
            .get<UserEntity>('https://localhost:7116/api/User')
            .pipe(map(this.userMapper.mapFrom));
    }

    createUserAsync(user: UserModel): Observable<UserModel> {
        return this.http
            .post<UserEntity>('https://localhost:7116/api/User', user)
            .pipe(map(this.userMapper.mapFrom));
    }

    updateUserAsync(user: UserModel): Observable<UserModel> {
        return this.http
            .put<UserEntity>('https://localhost:7116/api/User', user)
            .pipe(map(this.userMapper.mapFrom));
    }


}
