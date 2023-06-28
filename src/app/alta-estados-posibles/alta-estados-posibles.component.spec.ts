import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaEstadosPosiblesComponent } from './alta-estados-posibles.component';

describe('AltaEstadosPosiblesComponent', () => {
  let component: AltaEstadosPosiblesComponent;
  let fixture: ComponentFixture<AltaEstadosPosiblesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltaEstadosPosiblesComponent]
    });
    fixture = TestBed.createComponent(AltaEstadosPosiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
