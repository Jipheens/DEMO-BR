import { TestBed } from '@angular/core/testing';

import { EmployeeRoleTransfersService } from './employee-role-transfers.service';

describe('EmployeeRoleTransfersService', () => {
  let service: EmployeeRoleTransfersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeRoleTransfersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
