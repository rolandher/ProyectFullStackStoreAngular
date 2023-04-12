import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { NewUserModel } from '../models/newUser.model';

export abstract class UserRepository {
    abstract getUserAsync(): Observable<UserModel>;
    abstract createUserAsync(user: NewUserModel): Observable<NewUserModel>;


}
