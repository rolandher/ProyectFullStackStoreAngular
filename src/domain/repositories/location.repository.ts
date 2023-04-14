import { Observable } from 'rxjs';
import { LocationModel } from '../interfaces/locationInterface/location.model';
import { NewLocationModel } from '../interfaces/locationInterface/newLocation.model';


export abstract class LocationRepository {
    abstract getLocationAsync(): Observable<LocationModel[]>;
    abstract getLocationByIdAsync(id: number): Observable<LocationModel>;
    abstract createLocationAsync(location: NewLocationModel): Observable<NewLocationModel>;
}
