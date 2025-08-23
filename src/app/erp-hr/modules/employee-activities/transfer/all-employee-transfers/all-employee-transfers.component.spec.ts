import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmployeeTransfersComponent } from './all-employee-transfers.component';

describe('AllEmployeeTransfersComponent', () => {
  let component: AllEmployeeTransfersComponent;
  let fixture: ComponentFixture<AllEmployeeTransfersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEmployeeTransfersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEmployeeTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
