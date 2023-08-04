import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManavComponent } from './manav.component';

describe('ManavComponent', () => {
  let component: ManavComponent;
  let fixture: ComponentFixture<ManavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManavComponent]
    });
    fixture = TestBed.createComponent(ManavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
