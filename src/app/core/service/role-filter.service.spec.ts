import { TestBed } from '@angular/core/testing';

import { RoleFilterService } from './role-filter.service';

describe('RoleFilterService', () => {
  let service: RoleFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
