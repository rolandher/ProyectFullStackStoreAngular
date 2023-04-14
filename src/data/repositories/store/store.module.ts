import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreRepository } from 'src/domain/repositories/store.repository';
import { GetStoreProfileUseCase } from 'src/domain/usecases/storeCases/get-store-profile.usecase';
import { CreateStoreProfileUseCase } from 'src/domain/usecases/storeCases/create-store-profile.usecase';
import { StoreImplementationRepository } from './store-implementation.repository';


const getStoreProfileUseCaseFactory =
(storeRepo: StoreRepository) => new GetStoreProfileUseCase(storeRepo);
export const getStoreProfileUseCaseProvider = {
    provide: GetStoreProfileUseCase,
    useFactory: getStoreProfileUseCaseFactory,
    deps: [StoreRepository],
};

const createStoreProfileUseCaseFactory =
(storeRepo: StoreRepository) => new CreateStoreProfileUseCase(storeRepo);
export const createStoreProfileUseCaseProvider = {
    provide: CreateStoreProfileUseCase,
    useFactory: createStoreProfileUseCaseFactory,
    deps: [StoreRepository],
};


@NgModule({
    providers: [
      getStoreProfileUseCaseProvider,
      createStoreProfileUseCaseProvider,
        { provide: StoreRepository, useClass: StoreImplementationRepository },
    ],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
})
export class StoreModule { }
