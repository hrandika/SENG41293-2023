import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppService {
  loading = false;

  toggleLoading() {
    this.loading = !this.loading;
  }
}
