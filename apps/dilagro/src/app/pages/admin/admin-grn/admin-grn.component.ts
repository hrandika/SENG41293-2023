import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngxs/store';
import { ShowLoading } from '../../../state/app/app.actions';

@Component({
  selector: 'seng41293-admin-grn',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './admin-grn.component.html',
  styleUrls: ['./admin-grn.component.scss'],
})
export class AdminGrnComponent {
  @Input({ required: true }) label!: string;

  constructor(private store: Store) {}

  toggle() {
    this.store.dispatch(new ShowLoading(true));
  }
}
