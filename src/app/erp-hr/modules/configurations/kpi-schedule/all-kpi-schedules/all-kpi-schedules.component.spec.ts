import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllKpiSchedulesComponent } from './all-kpi-schedules.component';

describe('AllKpiSchedulesComponent', () => {
  let component: AllKpiSchedulesComponent;
  let fixture: ComponentFixture<AllKpiSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllKpiSchedulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllKpiSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
