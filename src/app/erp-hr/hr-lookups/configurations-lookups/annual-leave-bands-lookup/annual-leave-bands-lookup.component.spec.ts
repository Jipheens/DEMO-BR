import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualLeaveBandsLookupComponent } from './annual-leave-bands-lookup.component';

describe('AnnualLeaveBandsLookupComponent', () => {
  let component: AnnualLeaveBandsLookupComponent;
  let fixture: ComponentFixture<AnnualLeaveBandsLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualLeaveBandsLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualLeaveBandsLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
