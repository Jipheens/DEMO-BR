import { TestBed } from '@angular/core/testing';

import { RecursiveDeductionService } from './recursive-deduction.service';

describe('RecursiveDeductionService', () => {
  let service: RecursiveDeductionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursiveDeductionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
