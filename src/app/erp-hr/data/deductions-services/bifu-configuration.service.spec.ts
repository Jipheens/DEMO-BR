import { TestBed } from '@angular/core/testing';

import { BifuConfigurationService } from './bifu-configuration.service';

describe('BifuConfigurationService', () => {
  let service: BifuConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BifuConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
