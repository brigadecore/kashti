import { TestBed, inject } from '@angular/core/testing';

import { BuildResolver } from './build.resolver';
import { BuildService } from '../build/build.service';


describe('BuildResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BuildResolver,
        BuildService
      ]
    });
  });

  it('should be created', inject([BuildResolver], (service: BuildResolver) => {
    expect(service).toBeTruthy();
  }));
});
