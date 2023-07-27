import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDailyStock } from '@seng41293/model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DailyStockService {
  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<IDailyStock[]> {
    return this.httpClient.get<IDailyStock[]>('daily-stock');
  }
}
