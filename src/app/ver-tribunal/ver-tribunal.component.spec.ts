import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTribunalComponent } from './ver-tribunal.component';

describe('VerTribunalComponent', () => {
  let component: VerTribunalComponent;
  let fixture: ComponentFixture<VerTribunalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerTribunalComponent]
    });
    fixture = TestBed.createComponent(VerTribunalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
