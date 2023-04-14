/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SubtractStockComponent } from './subtractStock.component';

describe('SubtractStockComponent', () => {
  let component: SubtractStockComponent;
  let fixture: ComponentFixture<SubtractStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtractStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtractStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
