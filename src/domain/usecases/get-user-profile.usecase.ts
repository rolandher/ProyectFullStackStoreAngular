import { Observable } from 'rxjs';
import { UseCase } from 'src/base/use-case';
import { UserModel } from '../interfaces/user.model';
import { UserRepository } from '../repositories/user.repository';

export class GetUserProfileUseCase implements UseCase<void, UserModel[]> {

    constructor(private userRepository: UserRepository) { }

    execute(): Observable<UserModel[]> {
        return this.userRepository.getUserAsync();
    }


}
