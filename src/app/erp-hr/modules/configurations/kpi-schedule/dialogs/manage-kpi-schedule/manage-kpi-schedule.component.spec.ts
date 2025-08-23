import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageKpiScheduleComponent } from './manage-kpi-schedule.component';

describe('ManageKpiScheduleComponent', () => {
  let component: ManageKpiScheduleComponent;
  let fixture: ComponentFixture<ManageKpiScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageKpiScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageKpiScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
