import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightInfoComponent } from './weight-info.component';

describe('WeightInfoComponent', () => {
  let component: WeightInfoComponent;
  let fixture: ComponentFixture<WeightInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeightInfoComponent],
    });
    fixture = TestBed.createComponent(WeightInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
