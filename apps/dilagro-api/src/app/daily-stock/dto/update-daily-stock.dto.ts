import { PartialType } from '@nestjs/mapped-types';
import { CreateDailyStockDto } from './create-daily-stock.dto';

export class UpdateDailyStockDto extends PartialType(CreateDailyStockDto) {}
