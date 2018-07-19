import { inject, TestBed } from '@angular/core/testing';
import { JobService } from '../job/job.service';
import { JobResolver } from './job.resolver';

describe('JobResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        JobResolver,
        JobService
      ]
    });
  });

  it('should be created', inject([JobResolver], (service: JobResolver) => {
    expect(service).toBeTruthy();
  }));
});
