import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseLevyLookupComponent } from './house-levy-lookup.component';

describe('HouseLevyLookupComponent', () => {
  let component: HouseLevyLookupComponent;
  let fixture: ComponentFixture<HouseLevyLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseLevyLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseLevyLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
