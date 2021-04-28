import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedrapapeltijeraComponent } from './piedrapapeltijera.component';

describe('PiedrapapeltijeraComponent', () => {
  let component: PiedrapapeltijeraComponent;
  let fixture: ComponentFixture<PiedrapapeltijeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiedrapapeltijeraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiedrapapeltijeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
