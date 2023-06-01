import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarAreaComponent } from './modificar-area.component';

describe('ModificarAreaComponent', () => {
  let component: ModificarAreaComponent;
  let fixture: ComponentFixture<ModificarAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificarAreaComponent]
    });
    fixture = TestBed.createComponent(ModificarAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
