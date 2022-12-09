import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEvenementsComponent } from './liste-evenements.component';

describe('ListeEvenementsComponent', () => {
  let component: ListeEvenementsComponent;
  let fixture: ComponentFixture<ListeEvenementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeEvenementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeEvenementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
