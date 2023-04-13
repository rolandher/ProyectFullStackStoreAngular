import { Observable } from 'rxjs';
import { UseCase } from 'src/base/use-case';
import { UserRepository } from '../repositories/user.repository';
import { NewUserModel } from '../interfaces/newUser.model';

export class CreateUserProfileUseCase implements UseCase<NewUserModel, NewUserModel > {

      constructor(private userRepository: UserRepository) { }

      execute(user : NewUserModel): Observable<NewUserModel> {
          return this.userRepository.createUserAsync(user);

  }
}
