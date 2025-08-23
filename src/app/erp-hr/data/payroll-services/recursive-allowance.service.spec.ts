import { TestBed } from '@angular/core/testing';

import { RecursiveAllowanceService } from './recursive-allowance.service';

describe('RecursiveAllowanceService', () => {
  let service: RecursiveAllowanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursiveAllowanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
