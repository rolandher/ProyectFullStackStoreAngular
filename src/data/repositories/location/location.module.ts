import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GetLocationProfileUseCase } from 'src/domain/usecases/locationCases/get-location-profile.usecase';
import { LocationRepository } from 'src/domain/repositories/location.repository';
import { LocationImplementationRepository } from './location-implementation.repository';
import { CreateLocationProfileUseCase } from 'src/domain/usecases/locationCases/create-location-profile.usecase';
import { GetLocationByIdProfileUseCase } from 'src/domain/usecases/locationCases/getById-location-profile.usecase';



const getLocationProfileUseCaseFactory =
(locationRepo: LocationRepository) => new GetLocationProfileUseCase(locationRepo);
export const getLocationProfileUseCaseProvider = {
    provide: GetLocationProfileUseCase,
    useFactory: getLocationProfileUseCaseFactory,
    deps: [LocationRepository],
};

const createLocationProfileUseCaseFactory =
(locationRepo: LocationRepository) => new CreateLocationProfileUseCase(locationRepo);
export const createLocationProfileUseCaseProvider = {
    provide: CreateLocationProfileUseCase,
    useFactory: createLocationProfileUseCaseFactory,
    deps: [LocationRepository],
};

const getLocationByIdProfileUseCaseFactory =
(locationRepo: LocationRepository) => new GetLocationByIdProfileUseCase(locationRepo);
export const getLocationByIdProfileUseCaseProvider = {
    provide: GetLocationByIdProfileUseCase,
    useFactory: getLocationByIdProfileUseCaseFactory,
    deps: [LocationRepository],
};


@NgModule({
    providers: [
      getLocationProfileUseCaseProvider,
      createLocationProfileUseCaseProvider,
      getLocationByIdProfileUseCaseProvider,
        { provide: LocationRepository, useClass: LocationImplementationRepository },
    ],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
})
export class LocationModule { }
