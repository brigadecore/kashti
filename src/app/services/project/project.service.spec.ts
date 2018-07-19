import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, inject, TestBed } from '@angular/core/testing';
import { ApiProjectService } from './api-project.service';

describe('ApiProjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiProjectService],
      imports: [HttpClientModule, HttpClientTestingModule]
    });
  });

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  }));

  it(
    'should be created',
    inject([ApiProjectService], (service: ApiProjectService) => {
      expect(service).toBeTruthy();
    })
  );

  xit(
    'can get projects',
    async(
      inject(
        [ApiProjectService, HttpTestingController],
        (service: ApiProjectService, backend: HttpTestingController) => {

          service.getProjectBuilds().subscribe();

          backend.expectOne('api/projects').flush(null, { status: 200, statusText: 'Ok' });
        }
      )
    )
  );
});
