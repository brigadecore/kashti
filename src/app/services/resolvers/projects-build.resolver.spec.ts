import { inject, TestBed } from '@angular/core/testing';
import { ProjectService } from '../project/project.service';
import { ProjectResolver } from './project.resolver';

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
