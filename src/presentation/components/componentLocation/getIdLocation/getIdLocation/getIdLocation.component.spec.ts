/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GetIdLocationComponent } from './getIdLocation.component';

describe('GetIdLocationComponent', () => {
  let component: GetIdLocationComponent;
  let fixture: ComponentFixture<GetIdLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetIdLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetIdLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
