import { TestBed } from '@angular/core/testing';

import { BaseUrlInterceptorService } from './base-url-interceptor.service';

describe('BaseUrlInterceptorService', () => {
  let service: BaseUrlInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseUrlInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
