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

import { ProjectService } from './project.service';

describe('ProjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectService],
      imports: [HttpClientModule, HttpClientTestingModule]
    });
  });

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  }));

  it(
    'should be created',
    inject([ProjectService], (service: ProjectService) => {
      expect(service).toBeTruthy();
    })
  );

  it(
    'can get projects',
    async(
      inject(
        [ProjectService, HttpTestingController],
        (service: ProjectService, backend: HttpTestingController) => {

          service.getProjectBuilds().subscribe();

          backend.expectOne('api/projects').flush(null, { status: 200, statusText: 'Ok' });
        }
      )
    )
  );
});
