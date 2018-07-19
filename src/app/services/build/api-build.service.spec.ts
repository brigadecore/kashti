import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, inject, TestBed } from '@angular/core/testing';
import { ApiBuildService } from './api-build.service';

describe('ApiBuildService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiBuildService],
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
    inject([ApiBuildService], (service: ApiBuildService) => {
      expect(service).toBeTruthy();
    })
  );

  xit(
    'can get projects',
    async(
      inject(
        [ApiBuildService, HttpTestingController],
        (service: ApiBuildService, backend: HttpTestingController) => {
          service.getBuilds('abc').subscribe();

          backend
            .expectOne('api/projects')
            .flush(null, { status: 200, statusText: 'Ok' });
        }
      )
    )
  );
});
