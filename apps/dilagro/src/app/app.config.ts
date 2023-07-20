import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { NgxsModule } from '@ngxs/store';
import { appRoutes } from './app.routes';
import { AppState } from './state/app/app.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideAnimations(),
    importProvidersFrom(
      NgxsModule.forRoot([AppState], {
        developmentMode: isDevMode(),
      })
    ),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
};
