import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarResponsabilidadAreaComponent } from './asignar-responsabilidad-area.component';

describe('AsignarResponsabilidadAreaComponent', () => {
  let component: AsignarResponsabilidadAreaComponent;
  let fixture: ComponentFixture<AsignarResponsabilidadAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignarResponsabilidadAreaComponent]
    });
    fixture = TestBed.createComponent(AsignarResponsabilidadAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
