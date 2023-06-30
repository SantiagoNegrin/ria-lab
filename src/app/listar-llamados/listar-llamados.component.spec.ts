import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLlamadosComponent } from './listar-llamados.component';

describe('ListarLlamadosComponent', () => {
  let component: ListarLlamadosComponent;
  let fixture: ComponentFixture<ListarLlamadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarLlamadosComponent]
    });
    fixture = TestBed.createComponent(ListarLlamadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
