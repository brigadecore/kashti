import { TestBed, inject } from '@angular/core/testing';

import { ProjectResolver } from './project.resolver';
import { ProjectService } from '../project/project.service';


describe('ProjectResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProjectResolver,
        ProjectService
      ]
    });
  });

  it('should be created', inject([ProjectResolver], (service: ProjectResolver) => {
    expect(service).toBeTruthy();
  }));
});
