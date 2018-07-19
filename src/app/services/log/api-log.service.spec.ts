import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { ApiLogService } from './api-log.service';

describe('ApiLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiLogService],
      imports: [HttpClientModule, HttpClientTestingModule]
    });
  });

  afterEach(
    inject([HttpTestingController], (backend: HttpTestingController) => {
      backend.verify();
    })
  );

  it(
    'should be created',
    inject([ApiLogService], (service: ApiLogService) => {
      expect(service).toBeTruthy();
    })
  );
});
