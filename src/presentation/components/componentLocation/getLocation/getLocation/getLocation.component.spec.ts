/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GetLocationComponent } from './getLocation.component';

describe('GetLocationComponent', () => {
  let component: GetLocationComponent;
  let fixture: ComponentFixture<GetLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
