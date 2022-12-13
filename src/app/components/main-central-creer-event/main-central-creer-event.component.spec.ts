import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCentralCreerEventComponent } from './main-central-creer-event.component';

describe('MainCentralCreerEventComponent', () => {
  let component: MainCentralCreerEventComponent;
  let fixture: ComponentFixture<MainCentralCreerEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCentralCreerEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCentralCreerEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
