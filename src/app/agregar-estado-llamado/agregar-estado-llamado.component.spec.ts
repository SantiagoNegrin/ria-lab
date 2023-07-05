import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEstadoLlamadoComponent } from './agregar-estado-llamado.component';

describe('AgregarEstadoLlamadoComponent', () => {
  let component: AgregarEstadoLlamadoComponent;
  let fixture: ComponentFixture<AgregarEstadoLlamadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarEstadoLlamadoComponent]
    });
    fixture = TestBed.createComponent(AgregarEstadoLlamadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
