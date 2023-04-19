import { Observable } from 'rxjs';
import { NewUserModel } from '../interfaces/userInterface/newUser.model';
import { UserModel } from '../interfaces/userInterface/user.model';

export abstract class UserRepository {
    abstract getUserAsync(): Observable<UserModel[]>;
    abstract createUserAsync(user: NewUserModel): Observable<NewUserModel>;
    abstract updateUserAsync(user: UserModel): Observable<UserModel>;
    abstract deleteUserAsync(id: string): Observable<UserModel>;
}
