import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationModel } from 'src/domain/interfaces/locationInterface/location.model';
import { GetLocationProfileUseCase } from 'src/domain/usecases/locationCases/get-location-profile.usecase';

@Component({
  selector: 'app-getLocation',
  templateUrl: './getLocation.component.html',
  styleUrls: ['./getLocation.component.css']
})
export class GetLocationComponent implements OnInit {
  locationList : LocationModel[];

  constructor(private getLocationProfileUseCase: GetLocationProfileUseCase, private router: Router) {
    this.locationList = [];
  }

  ngOnInit() {
      this.getLocationProfileUseCase.execute().subscribe({
      next: (data) => {
        this.locationList = data;
        console.log(this.locationList);
      },
      error: (err) => {
        console.log(err);
      this.router.navigate(['admonstore']);
      },
    });
  }
}
