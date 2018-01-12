import { TestBed, inject, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { ProjectBuildService } from './project-build.service';

describe('ProjectBuildService', () => {
  let injector: TestBed;
  let service: ProjectBuildService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProjectBuildService]
    });

    injector = getTestBed();
    service = injector.get(ProjectBuildService);
    httpMock = injector.get(HttpTestingController);
  });

  it('#getProjectBuilds should return an Observable<ProjectBuild[]>', () => {
    const dummyProjectBuilds = [
      { name: 'florence', id: 'abcdef0123' },
      { name: 'nightingale', id: 'xyz0123' }
    ];

    service.getProjectBuilds().subscribe(projectBuilds => {
      expect(projectBuilds.length).toBe(2);
      expect(projectBuilds).toEqual(dummyProjectBuilds);
    });

    const req = httpMock.expectOne(`${service.API_ROOT}/v1/projects-build`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyProjectBuilds);
  });
});
