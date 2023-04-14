import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { GetUserProfileUseCase } from 'src/domain/usecases/userCases/get-user-profile.usecase';

import { UserImplementationRepository } from './user-implementation.repository';
import { CreateUserProfileUseCase } from 'src/domain/usecases/userCases/create-user-profile.usecase';
import { UpdateUserProfileUseCase } from 'src/domain/usecases/userCases/update-user-profile.usecase';
import { DeleteUserProfileUseCase } from 'src/domain/usecases/userCases/delete-user-profile.usecase';


const getUserProfileUseCaseFactory =
(userRepo: UserRepository) => new GetUserProfileUseCase(userRepo);
export const getUserProfileUseCaseProvider = {
    provide: GetUserProfileUseCase,
    useFactory: getUserProfileUseCaseFactory,
    deps: [UserRepository],
};

const createUserProfileUseCaseFactory =
(userRepo: UserRepository) => new CreateUserProfileUseCase(userRepo);
export const createUserProfileUseCaseProvider = {
    provide: CreateUserProfileUseCase,
    useFactory: createUserProfileUseCaseFactory,
    deps: [UserRepository],
};

const updateUserProfileUseCaseFactory =
(userRepo: UserRepository) => new UpdateUserProfileUseCase(userRepo);
export const updateUserProfileUseCaseProvider = {
    provide: UpdateUserProfileUseCase,
    useFactory: updateUserProfileUseCaseFactory,
    deps: [UserRepository],
};

const deleteUserProfileUseCaseFactory =
(userRepo: UserRepository) => new DeleteUserProfileUseCase(userRepo);
export const deleteUserProfileUseCaseProvider = {
    provide: DeleteUserProfileUseCase,
    useFactory: deleteUserProfileUseCaseFactory,
    deps: [UserRepository],
}

@NgModule({
    providers: [
      getUserProfileUseCaseProvider,
      createUserProfileUseCaseProvider,
      updateUserProfileUseCaseProvider,
      deleteUserProfileUseCaseProvider,
        { provide: UserRepository, useClass: UserImplementationRepository },
    ],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
})
export class DataModule { }
