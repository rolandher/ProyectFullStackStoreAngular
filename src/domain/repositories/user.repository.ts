import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

export abstract class UserRepository {
    abstract getUserAsync(): Observable<UserModel>;
    abstract createUserAsync(user: UserModel): Observable<UserModel>;
    abstract updateUserAsync(user: UserModel): Observable<UserModel>;

}
