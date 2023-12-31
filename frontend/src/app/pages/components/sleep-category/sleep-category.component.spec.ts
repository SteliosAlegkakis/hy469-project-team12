import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepCategoryComponent } from './sleep-category.component';

describe('SleepCategoryComponent', () => {
  let component: SleepCategoryComponent;
  let fixture: ComponentFixture<SleepCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SleepCategoryComponent]
    });
    fixture = TestBed.createComponent(SleepCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
