import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarTipoIntegranteComponent } from './modificar-tipo-integrante.component';

describe('ModificarTipoIntegranteComponent', () => {
  let component: ModificarTipoIntegranteComponent;
  let fixture: ComponentFixture<ModificarTipoIntegranteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificarTipoIntegranteComponent]
    });
    fixture = TestBed.createComponent(ModificarTipoIntegranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
