import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaResponsabilidadesComponent } from './alta-responsabilidades.component';

describe('AltaResponsabilidadesComponent', () => {
  let component: AltaResponsabilidadesComponent;
  let fixture: ComponentFixture<AltaResponsabilidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltaResponsabilidadesComponent]
    });
    fixture = TestBed.createComponent(AltaResponsabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
