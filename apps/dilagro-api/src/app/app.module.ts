import { Module } from '@nestjs/common';
import { DailyStockModule } from './daily-stock/daily-stock.module';

@Module({
  imports: [DailyStockModule],
})
export class AppModule {}
