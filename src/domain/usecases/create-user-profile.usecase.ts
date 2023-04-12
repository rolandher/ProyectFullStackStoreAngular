import { Observable } from 'rxjs';
import { UseCase } from 'src/base/use-case';
import { UserRepository } from '../repositories/user.repository';
import { NewUserModel } from '../models/newUser.model';

export class CreateUserProfileUseCase implements UseCase<void, NewUserModel> {
  execute(params: void): Observable<NewUserModel> {
    throw new Error('Method not implemented.');
  }


    // constructor(private userRepository: UserRepository) { }

    // execute(): Observable<NewUserModel> {
    //     return this.userRepository.createUserAsync();
    // }

}
