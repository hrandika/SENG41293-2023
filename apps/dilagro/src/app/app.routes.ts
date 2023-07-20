import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/login/login.component').then((c) => c.LoginComponent),
    // component: LoginComponent,
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./pages/admin/admin.component').then((c) => c.AdminComponent),
  },
];
