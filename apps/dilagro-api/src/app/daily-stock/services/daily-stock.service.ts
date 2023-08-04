import { Injectable } from '@nestjs/common';
import { CreateDailyStockDto } from '../dto/create-daily-stock.dto';
import { UpdateDailyStockDto } from '../dto/update-daily-stock.dto';
import { DailyStock, DailyStockDocument } from '../schema/daily-stock.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DailyStockService {
  constructor(
    @InjectModel(DailyStock.name) private dailyStockModel: Model<DailyStock>
  ) {}

  create(
    createDailyStockDto: CreateDailyStockDto
  ): Promise<DailyStockDocument> {
    return this.dailyStockModel.create(createDailyStockDto);
  }

  findAll(): Promise<DailyStockDocument[]> {
    return this.dailyStockModel.find().exec();
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
