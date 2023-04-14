/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GetIdProductComponent } from './getIdProduct.component';

describe('GetIdProductComponent', () => {
  let component: GetIdProductComponent;
  let fixture: ComponentFixture<GetIdProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetIdProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetIdProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
