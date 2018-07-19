import { inject, TestBed } from '@angular/core/testing';
import { BuildService } from '../build/build.service';
import { BuildsResolver } from './builds.resolver';

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
