import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveTypesLookupComponent } from './leave-types-lookup.component';

describe('LeaveTypesLookupComponent', () => {
  let component: LeaveTypesLookupComponent;
  let fixture: ComponentFixture<LeaveTypesLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveTypesLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveTypesLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
