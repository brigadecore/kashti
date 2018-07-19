import { inject, TestBed } from '@angular/core/testing';
import { BuildService } from '../build/build.service';
import { BuildResolver } from './build.resolver';

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
