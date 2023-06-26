import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoIntegranteComponent } from './listar-tipo-integrante.component';

describe('ListarTipoIntegranteComponent', () => {
  let component: ListarTipoIntegranteComponent;
  let fixture: ComponentFixture<ListarTipoIntegranteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarTipoIntegranteComponent]
    });
    fixture = TestBed.createComponent(ListarTipoIntegranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
