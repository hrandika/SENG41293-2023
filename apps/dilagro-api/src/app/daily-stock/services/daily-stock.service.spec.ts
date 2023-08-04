import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { rootMongooseTestModule } from '@seng41293/model';
import { Model } from 'mongoose';
import { CreateDailyStockDto } from '../dto/create-daily-stock.dto';
import { DailyStock, DailyStockSchema } from '../schema/daily-stock.schema';
import { DailyStockService } from './daily-stock.service';

describe('DailyStockService', () => {
  let service: DailyStockService;
  let dailyStockModel: Model<DailyStock>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([
          { name: DailyStock.name, schema: DailyStockSchema },
        ]),
      ],
      providers: [DailyStockService],
    }).compile();

    service = module.get<DailyStockService>(DailyStockService);
    dailyStockModel = module.get<Model<DailyStock>>(
      getModelToken(DailyStock.name)
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new Daily stock record', async () => {
    const dto: CreateDailyStockDto = {
      date: new Date(),
      amount: 1,
    };
    const savedDoc = await service.create(dto);
    expect(savedDoc.amount).toBe(1);
    expect(savedDoc.id).toBeDefined();
  });

  it('should have 0 records for the initial call', async () => {
    const savedDocs = await service.findAll();
    expect(savedDocs.length).toBe(0);
  });

  it('should have 2 records when we create two records', async () => {
    const dto: CreateDailyStockDto = {
      date: new Date(),
      amount: 1,
    };
    const dto2: CreateDailyStockDto = {
      date: new Date(),
      amount: 2,
    };
    await dailyStockModel.create(dto);
    await dailyStockModel.create(dto2);
    const savedDocs = await service.findAll();
    expect(savedDocs.length).toBe(2);
  });
});
