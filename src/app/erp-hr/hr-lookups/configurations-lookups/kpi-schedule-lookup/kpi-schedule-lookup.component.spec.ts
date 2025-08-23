import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiScheduleLookupComponent } from './kpi-schedule-lookup.component';

describe('KpiScheduleLookupComponent', () => {
  let component: KpiScheduleLookupComponent;
  let fixture: ComponentFixture<KpiScheduleLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KpiScheduleLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiScheduleLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
