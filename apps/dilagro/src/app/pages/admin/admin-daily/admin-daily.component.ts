import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DailyStockService } from '../../../services/daily-stock/daily-stock.service';
import { IDailyStock } from '@seng41293/model';

@Component({
  selector: 'seng41293-admin-daily',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-daily.component.html',
  styleUrls: ['./admin-daily.component.scss'],
})
export class AdminDailyComponent {
  dailyStock$: Observable<IDailyStock[]>;
  constructor(private dailyStockService: DailyStockService) {
    this.dailyStock$ = this.dailyStockService.findAll();
  }
}
