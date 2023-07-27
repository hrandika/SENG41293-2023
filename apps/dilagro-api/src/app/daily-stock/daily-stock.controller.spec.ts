import { Test, TestingModule } from '@nestjs/testing';
import { DailyStockController } from './daily-stock.controller';
import { DailyStockService } from './daily-stock.service';

describe('DailyStockController', () => {
  let controller: DailyStockController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyStockController],
      providers: [DailyStockService],
    }).compile();

    controller = module.get<DailyStockController>(DailyStockController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
