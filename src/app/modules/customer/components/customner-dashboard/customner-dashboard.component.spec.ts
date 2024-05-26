import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomnerDashboardComponent } from './customner-dashboard.component';

describe('CustomnerDashboardComponent', () => {
  let component: CustomnerDashboardComponent;
  let fixture: ComponentFixture<CustomnerDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomnerDashboardComponent]
    });
    fixture = TestBed.createComponent(CustomnerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
