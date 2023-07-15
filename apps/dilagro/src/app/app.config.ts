import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { appRoutes } from './app.routes';
import { AppState } from './state/app/app.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideAnimations(),
    importProvidersFrom(
      NgxsModule.forRoot([AppState], {
        developmentMode: true,
      })
    ),
  ],
};
