import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaMiembrosTribunalesComponent } from './alta-miembros-tribunales.component';

describe('AltaMiembrosTribunalesComponenComponent', () => {
  let component: AltaMiembrosTribunalesComponent;
  let fixture: ComponentFixture<AltaMiembrosTribunalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltaMiembrosTribunalesComponent]
    });
    fixture = TestBed.createComponent(AltaMiembrosTribunalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
