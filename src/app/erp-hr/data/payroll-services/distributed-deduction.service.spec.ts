import { TestBed } from '@angular/core/testing';

import { DistributedDeductionService } from './distributed-deduction.service';

describe('DistributedDeductionService', () => {
  let service: DistributedDeductionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistributedDeductionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
