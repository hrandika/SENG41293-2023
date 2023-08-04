import { Test, TestingModule } from '@nestjs/testing';
import { DailyStockController } from './daily-stock.controller';
import { DailyStockService } from '../services/daily-stock.service';
import { randomUUID } from 'crypto';
import request from 'supertest';
import { INestApplication } from '@nestjs/common';

class MockDailyStockService {
  create = jest.fn().mockResolvedValue({
    amount: 1,
    date: new Date('2023-10-10'),
    _id: randomUUID(),
  });
  findAll = jest.fn().mockResolvedValue([
    {
      amount: 1,
      date: new Date('2023-10-10'),
      _id: '1dd1e3ff-67b6-426c-8209-b7e320c96e73',
    },
  ]);
}

describe('DailyStockController', () => {
  let app: INestApplication;
  let controller: DailyStockController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyStockController],
      providers: [
        {
          provide: DailyStockService,
          useClass: MockDailyStockService,
        },
      ],
    }).compile();

    controller = module.get<DailyStockController>(DailyStockController);
    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('shoud /GET daily stocks', async () => {
    const response = await request(app.getHttpServer())
      .get('/daily-stock')
      .expect(200);
    expect(response.body[0]._id).toBe(
      '1dd1e3ff-6dddd7b6-426c-8209-b7e320c96e73'
    );
  });
});
