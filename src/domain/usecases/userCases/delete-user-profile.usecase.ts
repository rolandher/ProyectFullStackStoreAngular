import { Observable } from 'rxjs';
import { UseCase } from 'src/base/use-case';
import { UserRepository } from '../../repositories/user.repository';


export class DeleteUserProfileUseCase implements UseCase<string, string> {

      constructor(private userRepository: UserRepository) { }

      execute(id: string): Observable<string> {
          return this.userRepository.deleteUserAsync(id);
      }
  }
