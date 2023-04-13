/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreateStoreComponent } from './createStore.component';

describe('CreateStoreComponent', () => {
  let component: CreateStoreComponent;
  let fixture: ComponentFixture<CreateStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
