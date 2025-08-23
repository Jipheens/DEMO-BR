import { TestBed } from '@angular/core/testing';

import { StaffWelfareService } from './staff-welfare.service';

describe('StaffWelfareService', () => {
  let service: StaffWelfareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffWelfareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
