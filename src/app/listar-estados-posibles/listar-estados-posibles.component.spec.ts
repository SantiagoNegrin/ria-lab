import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEstadosPosiblesComponent } from './listar-estados-posibles.component';

describe('ListarEstadosPosiblesComponent', () => {
  let component: ListarEstadosPosiblesComponent;
  let fixture: ComponentFixture<ListarEstadosPosiblesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarEstadosPosiblesComponent]
    });
    fixture = TestBed.createComponent(ListarEstadosPosiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
