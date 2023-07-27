import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DailyStockService } from './daily-stock.service';
import { CreateDailyStockDto } from './dto/create-daily-stock.dto';
import { UpdateDailyStockDto } from './dto/update-daily-stock.dto';

@Controller('daily-stock')
export class DailyStockController {
  constructor(private readonly dailyStockService: DailyStockService) {}

  @Post()
  create(@Body() createDailyStockDto: CreateDailyStockDto) {
    return this.dailyStockService.create(createDailyStockDto);
  }

  @Get()
  findAll() {
    return this.dailyStockService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dailyStockService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDailyStockDto: UpdateDailyStockDto
  ) {
    return this.dailyStockService.update(+id, updateDailyStockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dailyStockService.remove(+id);
  }
}
