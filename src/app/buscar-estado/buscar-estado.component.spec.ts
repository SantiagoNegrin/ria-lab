import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarEstadoComponent } from './buscar-estado.component';

describe('BuscarEstadoComponent', () => {
  let component: BuscarEstadoComponent;
  let fixture: ComponentFixture<BuscarEstadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarEstadoComponent]
    });
    fixture = TestBed.createComponent(BuscarEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
