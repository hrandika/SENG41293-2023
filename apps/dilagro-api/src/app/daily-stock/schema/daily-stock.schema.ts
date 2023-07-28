import { IDailyStock } from '@seng41293/model';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class DailyStock implements IDailyStock {
  @Prop() date: Date;
  @Prop() amount: number;
}

export type DailyStockDocument = HydratedDocument<DailyStock>;
export const DailyStockSchema = SchemaFactory.createForClass(DailyStock);
