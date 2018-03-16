import { TestBed, inject, async } from '@angular/core/testing';
import {
  HttpClientModule,
  HttpRequest,
  HttpParams
} from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { JobService } from './job.service';

describe('JobService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobService],
      imports: [HttpClientModule, HttpClientTestingModule]
    });
  });

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  }));

  it(
    'should be created',
    inject([JobService], (service: JobService) => {
      expect(service).toBeTruthy();
    })
  );

  it(
    'can get jobs',
    async(
      inject(
        [JobService, HttpTestingController],
        (service: JobService, backend: HttpTestingController) => {

          service.getJobs().subscribe();

          backend.expectOne('api/jobs').flush(null, { status: 200, statusText: 'Ok' });
        }
      )
    )
  );
});
