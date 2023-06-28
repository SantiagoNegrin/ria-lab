import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPosiblesEstadosComponent } from './modificar-posibles-estados.component';

describe('ModificarPosiblesEstadosComponent', () => {
  let component: ModificarPosiblesEstadosComponent;
  let fixture: ComponentFixture<ModificarPosiblesEstadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificarPosiblesEstadosComponent]
    });
    fixture = TestBed.createComponent(ModificarPosiblesEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
