import { UseCase } from 'src/base/use-case';
import { Observable } from 'rxjs';
import { LocationModel } from 'src/domain/interfaces/locationInterface/location.model';
import { LocationRepository } from 'src/domain/repositories/location.repository';

export class GetLocationProfileUseCase implements UseCase<void, LocationModel[]> {

    constructor(private locationRepository: LocationRepository) { }

    execute(): Observable<LocationModel[]> {
        return this.locationRepository.getLocationAsync();
  }

}
