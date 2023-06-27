import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarTipoDocumentoComponent } from './modificar-tipo-documento.component';

describe('ModificarTipoDocumentoComponent', () => {
  let component: ModificarTipoDocumentoComponent;
  let fixture: ComponentFixture<ModificarTipoDocumentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificarTipoDocumentoComponent]
    });
    fixture = TestBed.createComponent(ModificarTipoDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
