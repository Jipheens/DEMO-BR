import { TestBed } from '@angular/core/testing';

import { SaccoContributionService } from './sacco-contribution.service';

describe('SaccoContributionService', () => {
  let service: SaccoContributionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaccoContributionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
