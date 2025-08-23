import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmployeeJobRoleTransferComponent } from './all-employee-job-role-transfer.component';

describe('AllEmployeeJobRoleTransferComponent', () => {
  let component: AllEmployeeJobRoleTransferComponent;
  let fixture: ComponentFixture<AllEmployeeJobRoleTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEmployeeJobRoleTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEmployeeJobRoleTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
