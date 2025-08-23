import { TestBed } from '@angular/core/testing';

import { HelbDeductionService } from './helb-deduction.service';

describe('HelbDeductionService', () => {
  let service: HelbDeductionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelbDeductionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
