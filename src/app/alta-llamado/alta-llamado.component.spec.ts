import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaLlamadoComponent } from './alta-llamado.component';

describe('AltaLlamadoComponent', () => {
  let component: AltaLlamadoComponent;
  let fixture: ComponentFixture<AltaLlamadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltaLlamadoComponent]
    });
    fixture = TestBed.createComponent(AltaLlamadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
