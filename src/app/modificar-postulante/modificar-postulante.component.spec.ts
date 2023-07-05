import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPostulanteComponent } from './modificar-postulante.component';

describe('ModificarPostulanteComponent', () => {
  let component: ModificarPostulanteComponent;
  let fixture: ComponentFixture<ModificarPostulanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificarPostulanteComponent]
    });
    fixture = TestBed.createComponent(ModificarPostulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
