import { UseCase } from 'src/base/use-case';

import { Observable } from 'rxjs';
import { NewLocationModel } from 'src/domain/interfaces/locationInterface/newLocation.model';

import { LocationRepository } from 'src/domain/repositories/location.repository';

export class CreateLocationProfileUseCase implements UseCase<NewLocationModel, NewLocationModel> {

    constructor(private locationRepository: LocationRepository) { }

    execute(location : NewLocationModel): Observable<NewLocationModel> {
        return this.locationRepository.createLocationAsync(location);
  }

}
