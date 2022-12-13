/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainRightEventsComponent } from './main-right-events.component';

describe('MainRightEventsComponent', () => {
  let component: MainRightEventsComponent;
  let fixture: ComponentFixture<MainRightEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainRightEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRightEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
