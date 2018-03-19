import { TestBed, inject } from '@angular/core/testing';

import { ProjectsBuildResolver } from './projects-build.resolver';
import { ProjectService } from './project/project.service';


describe('ProjectsBuildResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProjectsBuildResolver,
        ProjectService
      ]
    });
  });

  it('should be created', inject([ProjectsBuildResolver], (service: ProjectsBuildResolver) => {
    expect(service).toBeTruthy();
  }));
});
