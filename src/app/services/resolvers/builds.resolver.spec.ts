import { TestBed, inject } from '@angular/core/testing';

import { BuildsResolver } from './builds.resolver';
import { BuildService } from '../build/build.service';


describe('BuildsResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BuildsResolver,
        BuildService
      ]
    });
  });

  it('should be created', inject([BuildsResolver], (service: BuildsResolver) => {
    expect(service).toBeTruthy();
  }));
});
