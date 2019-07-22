import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastManagementComponent } from './forecast-management.component';

describe('ForecastManagementComponent', () => {
  let component: ForecastManagementComponent;
  let fixture: ComponentFixture<ForecastManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
