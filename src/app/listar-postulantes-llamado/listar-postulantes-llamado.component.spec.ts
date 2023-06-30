import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPostulantesLlamadoComponent } from './listar-postulantes-llamado.component';

describe('ListarPostulantesLlamadoComponent', () => {
  let component: ListarPostulantesLlamadoComponent;
  let fixture: ComponentFixture<ListarPostulantesLlamadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPostulantesLlamadoComponent]
    });
    fixture = TestBed.createComponent(ListarPostulantesLlamadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
