import { TestBed } from '@angular/core/testing';

import { DailyStockService } from './daily-stock.service';

describe('DailyStockService', () => {
  let service: DailyStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
