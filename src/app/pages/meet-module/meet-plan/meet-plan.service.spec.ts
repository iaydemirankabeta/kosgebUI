import { TestBed } from '@angular/core/testing';

import { MeetPlanService } from './meet-plan.service';

describe('MeetPlanService', () => {
  let service: MeetPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeetPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
