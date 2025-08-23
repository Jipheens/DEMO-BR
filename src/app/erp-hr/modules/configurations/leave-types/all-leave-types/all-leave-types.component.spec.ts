import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLeaveTypesComponent } from './all-leave-types.component';

describe('AllLeaveTypesComponent', () => {
  let component: AllLeaveTypesComponent;
  let fixture: ComponentFixture<AllLeaveTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLeaveTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLeaveTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
