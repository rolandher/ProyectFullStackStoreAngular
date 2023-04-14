/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AgregateStockComponent } from './agregateStock.component';

describe('AgregateStockComponent', () => {
  let component: AgregateStockComponent;
  let fixture: ComponentFixture<AgregateStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregateStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregateStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
