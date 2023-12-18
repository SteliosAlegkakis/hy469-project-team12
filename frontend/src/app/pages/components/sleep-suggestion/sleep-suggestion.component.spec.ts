import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepSuggestionComponent } from './sleep-suggestion.component';

describe('SleepSuggestionComponent', () => {
  let component: SleepSuggestionComponent;
  let fixture: ComponentFixture<SleepSuggestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SleepSuggestionComponent]
    });
    fixture = TestBed.createComponent(SleepSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
