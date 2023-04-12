import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { GetUserProfileUseCase } from 'src/domain/usecases/get-user-profile.usecase';

import { UserImplementationRepository } from './repositories/user/user-implementation.repository';


const getUserProfileUseCaseFactory =
(userRepo: UserRepository) => new GetUserProfileUseCase(userRepo);
export const getUserProfileUseCaseProvider = {
    provide: GetUserProfileUseCase,
    useFactory: getUserProfileUseCaseFactory,
    deps: [UserRepository],

};
@NgModule({
    providers: [
      getUserProfileUseCaseProvider,
        { provide: UserRepository, useClass: UserImplementationRepository },
    ],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
})
export class DataModule { }
