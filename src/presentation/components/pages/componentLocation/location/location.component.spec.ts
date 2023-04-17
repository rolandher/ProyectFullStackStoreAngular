import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocationComponent } from './location.component';

import { GetLocationProfileUseCase } from 'src/domain/usecases/locationCases/get-location-profile.usecase';
import { CreateStoreProfileUseCase } from  'src/domain/usecases/storeCases/create-store-profile.usecase';
import { of } from 'rxjs';
import { StoreModule } from 'src/data/repositories/store/store.module';

describe('LocationComponent', () => {
  let component: LocationComponent;
  let fixture: ComponentFixture<LocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationComponent],
      providers: [GetLocationProfileUseCase, CreateStoreProfileUseCase],
      imports: [StoreModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("test_get_location_success", () => {
    // Arrange
    const location = {
      id: 1,
      id_Store: 1,
      names: "Bogota",
      description: "Bogota",
      location_Type: "Bogota"
    };
    const getlocationUseCase = TestBed.inject(GetLocationProfileUseCase);
    const spy = spyOn(getlocationUseCase, "execute").and.returnValue(of());

    // Act
    component.getLocation();

    // Assert
    expect(spy).toHaveBeenCalled();

  });

  it('createLocation', () => {
    // Arrange
    const location = {
      id: 1,
      id_Store: 1,
      names: "Bogota",
      description: "Bogota",
      location_Type: "Bogota"
    };
    const getlocationUseCase = TestBed.inject(CreateStoreProfileUseCase);
    const spy = spyOn(getlocationUseCase, "execute").and.returnValue(of());

    // Act
    component.getLocation();

    // Assert
    expect(component).toBeDefined();
  }

  );
});
