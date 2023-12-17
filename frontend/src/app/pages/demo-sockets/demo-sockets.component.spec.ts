import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSocketsComponent } from './demo-sockets.component';

describe('DemoSocketsComponent', () => {
  let component: DemoSocketsComponent;
  let fixture: ComponentFixture<DemoSocketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoSocketsComponent]
    });
    fixture = TestBed.createComponent(DemoSocketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
