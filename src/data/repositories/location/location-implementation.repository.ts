import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { environment } from 'src/environments/environment';
import { LocationRepository } from 'src/domain/repositories/location.repository';
import { LocationModel } from 'src/domain/interfaces/locationInterface/location.model';
import { NewLocationModel } from 'src/domain/interfaces/locationInterface/newLocation.model';

@Injectable({
    providedIn: 'root',
})
export class LocationImplementationRepository extends LocationRepository {

    constructor(private readonly httpClient: HttpClient,private router: Router, private afAuth: AngularFireAuth) {
        super();
    }

    getLocationAsync(): Observable<LocationModel[]> {
        return this.httpClient.get<LocationModel[]>(environment.urladmonStore)
          }
    createLocationAsync(location: NewLocationModel): Observable<NewLocationModel> {
        return this.httpClient.post<NewLocationModel>(environment.urladmonStore, location)
    }

    SignOut() {
      return this.afAuth.signOut().then(() => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.router.navigate(['login']);
      });
  }
}
