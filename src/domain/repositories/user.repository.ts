import { Observable } from 'rxjs';
import { NewUserModel } from '../interfaces/newUser.model';
import { UserModel } from '../interfaces/user.model';

export abstract class UserRepository {
    abstract getUserAsync(): Observable<UserModel[]>;
    abstract createUserAsync(user: NewUserModel): Observable<NewUserModel>;


}
