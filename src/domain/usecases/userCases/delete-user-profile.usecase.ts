import { Observable } from 'rxjs';
import { UseCase } from 'src/base/use-case';
import { UserRepository } from '../../repositories/user.repository';
import { UserModel } from 'src/domain/interfaces/userInterface/user.model';


export class DeleteUserProfileUseCase implements UseCase<string, UserModel> {

      constructor(private userRepository: UserRepository) { }

      execute(id: string): Observable<UserModel> {
          return this.userRepository.deleteUserAsync(id);
      }
  }
