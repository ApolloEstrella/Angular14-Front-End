import { TestBed } from '@angular/core/testing';

import { JobPortalService } from './job-portal.service';

describe('JobPortalService', () => {
  let service: JobPortalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobPortalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
