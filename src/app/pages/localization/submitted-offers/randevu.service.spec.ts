import { TestBed } from '@angular/core/testing';

import { RandevuService } from './randevu.service';

describe('RandevuService', () => {
  let service: RandevuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandevuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
