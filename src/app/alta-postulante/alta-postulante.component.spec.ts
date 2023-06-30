import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaPostulanteComponent } from './alta-postulante.component';

describe('AltaPostulanteComponent', () => {
  let component: AltaPostulanteComponent;
  let fixture: ComponentFixture<AltaPostulanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltaPostulanteComponent]
    });
    fixture = TestBed.createComponent(AltaPostulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
