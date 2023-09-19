import { TestBed } from '@angular/core/testing';

import { ApplicationExamplesService } from './application-examples.service';

describe('ApplicationExamplesService', () => {
  let service: ApplicationExamplesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationExamplesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
