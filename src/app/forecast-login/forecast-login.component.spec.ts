import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastLoginComponent } from './forecast-login.component';

describe('ForecastLoginComponent', () => {
  let component: ForecastLoginComponent;
  let fixture: ComponentFixture<ForecastLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
