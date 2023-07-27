import { Injectable } from '@nestjs/common';
import { CreateDailyStockDto } from './dto/create-daily-stock.dto';
import { UpdateDailyStockDto } from './dto/update-daily-stock.dto';
import { DailyStock } from './entities/daily-stock.entity';

@Injectable()
export class DailyStockService {
  create(createDailyStockDto: CreateDailyStockDto) {
    return 'This action adds a new dailyStock';
  }

  findAll(): DailyStock[] {
    return [
      {
        date: new Date(),
        amount: 100,
      },
      {
        date: new Date(),
        amount: 200,
      },
      {
        date: new Date(),
        amount: 300,
      },
      {
        date: new Date(),
        amount: 400,
      },
      {
        date: new Date(),
        amount: 500,
      },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} dailyStock`;
  }

  update(id: number, updateDailyStockDto: UpdateDailyStockDto) {
    return `This action updates a #${id} dailyStock`;
  }

  remove(id: number) {
    return `This action removes a #${id} dailyStock`;
  }
}
