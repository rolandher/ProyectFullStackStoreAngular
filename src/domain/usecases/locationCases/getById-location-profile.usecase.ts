import { UseCase } from 'src/base/use-case';
import { Observable } from 'rxjs';
import { LocationModel } from 'src/domain/interfaces/locationInterface/location.model';
import { LocationRepository } from 'src/domain/repositories/location.repository';

export class GetLocationByIdProfileUseCase implements UseCase<number, LocationModel> {

    constructor(private locationRepository: LocationRepository) { }

    execute(id: number): Observable<LocationModel> {
        return this.locationRepository.getLocationByIdAsync(id);
    }

}
