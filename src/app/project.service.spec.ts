import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProjectService } from './project.service';

describe('ProjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectService],
      imports: [ HttpClientTestingModule ]
    });
  });

  it(
    'should be created',
    inject([ProjectService], (service: ProjectService) => {
      expect(service).toBeTruthy();
    })
  );
});
