import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightBarComponent } from './weight-bar.component';

describe('WeightBarComponent', () => {
  let component: WeightBarComponent;
  let fixture: ComponentFixture<WeightBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeightBarComponent]
    });
    fixture = TestBed.createComponent(WeightBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
