import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { getEnvPath } from './app.helper';
import { DailyStockModule } from './daily-stock/daily-stock.module';

const envFilePath: string = getEnvPath(`${__dirname}/environments`);
console.log(envFilePath);

@Module({
  imports: [
    DailyStockModule,
    ConfigModule.forRoot({ envFilePath }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('MONGO_URL'),
      }),
    }),
  ],
})
export class AppModule {}
