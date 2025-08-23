import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiAnalysisLookupComponent } from './kpi-analysis-lookup.component';

describe('KpiAnalysisLookupComponent', () => {
  let component: KpiAnalysisLookupComponent;
  let fixture: ComponentFixture<KpiAnalysisLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KpiAnalysisLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiAnalysisLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
