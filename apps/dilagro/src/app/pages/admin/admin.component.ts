import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { AdminGrnComponent } from './admin-grn/admin-grn.component';
import { AdminDailyComponent } from './admin-daily/admin-daily.component';
@Component({
  selector: 'seng41293-admin',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    AdminGrnComponent,
    AdminDailyComponent,
  ],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  labelGRN = 'Supuni';
}
