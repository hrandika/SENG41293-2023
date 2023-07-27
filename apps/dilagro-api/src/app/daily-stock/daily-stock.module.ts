import { Module } from '@nestjs/common';
import { DailyStockService } from './daily-stock.service';
import { DailyStockController } from './daily-stock.controller';

@Module({
  controllers: [DailyStockController],
  providers: [DailyStockService],
})
export class DailyStockModule {}
