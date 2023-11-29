import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryInfoComponent } from './secondary-info.component';

describe('SecondaryInfoComponent', () => {
  let component: SecondaryInfoComponent;
  let fixture: ComponentFixture<SecondaryInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondaryInfoComponent]
    });
    fixture = TestBed.createComponent(SecondaryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
