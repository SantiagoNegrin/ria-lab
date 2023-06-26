import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaTipoIntegranteComponent } from './alta-tipo-integrante.component';

describe('AltaTipoIntegranteComponent', () => {
  let component: AltaTipoIntegranteComponent;
  let fixture: ComponentFixture<AltaTipoIntegranteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltaTipoIntegranteComponent]
    });
    fixture = TestBed.createComponent(AltaTipoIntegranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
