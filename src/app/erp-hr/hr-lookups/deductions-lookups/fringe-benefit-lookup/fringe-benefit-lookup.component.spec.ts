import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FringeBenefitLookupComponent } from './fringe-benefit-lookup.component';

describe('FringeBenefitLookupComponent', () => {
  let component: FringeBenefitLookupComponent;
  let fixture: ComponentFixture<FringeBenefitLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FringeBenefitLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FringeBenefitLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
