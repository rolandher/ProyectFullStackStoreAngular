/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LayoutsComponent } from './layouts.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from '../header/header.component';
import { MainModule } from '../main.module';
import { AuthService } from 'src/presentation/Login/auth/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

describe('LayoutsComponent', () => {
  let component: LayoutsComponent;
  let fixture: ComponentFixture<LayoutsComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutsComponent ],
      imports: [ RouterTestingModule, MainModule],
      providers: [AuthService, AngularFireAuth]

    })
    component = TestBed.inject(LayoutsComponent);
    fixture = TestBed.createComponent(LayoutsComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  }
  );
});


