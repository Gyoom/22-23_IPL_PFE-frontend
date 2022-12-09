/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainCentralColumnComponent } from './main-central-column.component';

describe('MainCentralColumnComponent', () => {
  let component: MainCentralColumnComponent;
  let fixture: ComponentFixture<MainCentralColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCentralColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCentralColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
