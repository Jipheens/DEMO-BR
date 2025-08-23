import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageKpiAnalysisComponent } from './manage-kpi-analysis.component';

describe('ManageKpiAnalysisComponent', () => {
  let component: ManageKpiAnalysisComponent;
  let fixture: ComponentFixture<ManageKpiAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageKpiAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageKpiAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
