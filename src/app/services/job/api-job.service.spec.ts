import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, inject, TestBed } from '@angular/core/testing';
import { ApiJobService } from './api-job.service';

describe('ApiJobService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiJobService],
      imports: [HttpClientModule, HttpClientTestingModule]
    });
  });

  afterEach(
    inject([HttpTestingController], (backend: HttpTestingController) => {
      backend.verify();
    })
  );

  it(
    'should be created',
    inject([ApiJobService], (service: ApiJobService) => {
      expect(service).toBeTruthy();
    })
  );

  xit(
    'can get jobs',
    async(
      inject(
        [ApiJobService, HttpTestingController],
        (service: ApiJobService, backend: HttpTestingController) => {
          service.getJobs('abc').subscribe();

          backend
            .expectOne('api/jobs')
            .flush(null, { status: 200, statusText: 'Ok' });
        }
      )
    )
  );
});
