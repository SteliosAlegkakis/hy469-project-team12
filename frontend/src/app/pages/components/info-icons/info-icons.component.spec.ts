import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoIconsComponent } from './info-icons.component';

describe('InfoIconsComponent', () => {
  let component: InfoIconsComponent;
  let fixture: ComponentFixture<InfoIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoIconsComponent]
    });
    fixture = TestBed.createComponent(InfoIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
