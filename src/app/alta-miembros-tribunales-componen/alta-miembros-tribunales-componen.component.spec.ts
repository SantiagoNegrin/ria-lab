import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaMiembrosTribunalesComponenComponent } from './alta-miembros-tribunales-componen.component';

describe('AltaMiembrosTribunalesComponenComponent', () => {
  let component: AltaMiembrosTribunalesComponenComponent;
  let fixture: ComponentFixture<AltaMiembrosTribunalesComponenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltaMiembrosTribunalesComponenComponent]
    });
    fixture = TestBed.createComponent(AltaMiembrosTribunalesComponenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
