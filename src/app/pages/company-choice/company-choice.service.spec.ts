import { TestBed } from '@angular/core/testing';

import { CompanyChoiceService } from './company-choice.service';

describe('CompanyChoiceService', () => {
  let service: CompanyChoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyChoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
