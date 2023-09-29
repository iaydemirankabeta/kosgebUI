import { TestBed } from '@angular/core/testing';

import { KobiProfileService } from './kobi-profile.service';

describe('KobiProfileService', () => {
  let service: KobiProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KobiProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
