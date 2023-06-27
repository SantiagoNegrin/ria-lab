import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaPostulantesComponent } from './alta-postulantes.component';

describe('AltaPostulantesComponent', () => {
  let component: AltaPostulantesComponent;
  let fixture: ComponentFixture<AltaPostulantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltaPostulantesComponent]
    });
    fixture = TestBed.createComponent(AltaPostulantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
