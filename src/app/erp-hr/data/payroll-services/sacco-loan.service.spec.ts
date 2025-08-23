import { TestBed } from '@angular/core/testing';

import { SaccoLoanService } from './sacco-loan.service';

describe('SaccoLoanService', () => {
  let service: SaccoLoanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaccoLoanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
