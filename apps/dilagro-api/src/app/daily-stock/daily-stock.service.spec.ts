import { Test, TestingModule } from '@nestjs/testing';
import { DailyStockService } from './daily-stock.service';

describe('DailyStockService', () => {
  let service: DailyStockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyStockService],
    }).compile();

    service = module.get<DailyStockService>(DailyStockService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
