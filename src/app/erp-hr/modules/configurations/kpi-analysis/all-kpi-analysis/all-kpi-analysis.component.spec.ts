import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllKpiAnalysisComponent } from './all-kpi-analysis.component';

describe('AllKpiAnalysisComponent', () => {
  let component: AllKpiAnalysisComponent;
  let fixture: ComponentFixture<AllKpiAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllKpiAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllKpiAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
