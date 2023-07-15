import { Route } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./pages/admin/admin.component').then((c) => c.AdminComponent),
  },
];
