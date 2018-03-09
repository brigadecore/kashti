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

import { ProjectBuildService } from './project-build.service';

describe('ProjectBuildService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectBuildService],
      imports: [HttpClientModule, HttpClientTestingModule]
    });
  });

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  }));

  it(
    'should be created',
    inject([ProjectBuildService], (service: ProjectBuildService) => {
      expect(service).toBeTruthy();
    })
  );

  it(
    'can get projects',
    async(
      inject(
        [ProjectBuildService, HttpTestingController],
        (service: ProjectBuildService, backend: HttpTestingController) => {

          service.getProjectBuilds().subscribe();

          backend.expectOne('api/projects').flush(null, { status: 200, statusText: 'Ok' });
        }
      )
    )
  );
});
