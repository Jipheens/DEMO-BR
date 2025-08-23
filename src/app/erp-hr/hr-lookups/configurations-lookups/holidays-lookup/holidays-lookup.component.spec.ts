import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaysLookupComponent } from './holidays-lookup.component';

describe('HolidaysLookupComponent', () => {
  let component: HolidaysLookupComponent;
  let fixture: ComponentFixture<HolidaysLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidaysLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidaysLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
