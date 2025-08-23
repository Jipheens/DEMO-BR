import { TestBed } from '@angular/core/testing';

import { SaccoLoanServiceService } from './sacco-loan-service.service';

describe('SaccoLoanServiceService', () => {
  let service: SaccoLoanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaccoLoanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
