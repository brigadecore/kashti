import { TestBed, inject } from '@angular/core/testing';

import { JobResolver } from './job.resolver';
import { JobService } from '../job/job.service';


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
