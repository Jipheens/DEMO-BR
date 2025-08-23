import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeReliefLookupComponent } from './paye-relief-lookup.component';

describe('PayeReliefLookupComponent', () => {
  let component: PayeReliefLookupComponent;
  let fixture: ComponentFixture<PayeReliefLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayeReliefLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayeReliefLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
