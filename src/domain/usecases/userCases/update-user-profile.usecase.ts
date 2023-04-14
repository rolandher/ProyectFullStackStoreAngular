import { Observable } from 'rxjs';
import { UseCase } from 'src/base/use-case';
import { UserRepository } from '../../repositories/user.repository';
import { NewUserModel } from '../../interfaces/userInterface/newUser.model';
import { UserModel } from 'src/domain/interfaces/userInterface/user.model';

export class UpdateUserProfileUseCase implements UseCase<UserModel, UserModel > {

      constructor(private userRepository: UserRepository) { }

      execute(user : UserModel): Observable<UserModel> {
          return this.userRepository.updateUserAsync(user);
  }
}
