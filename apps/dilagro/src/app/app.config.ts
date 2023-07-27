import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { NgxsModule } from '@ngxs/store';
import { appRoutes } from './app.routes';
import { AppState } from './state/app/app.state';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { BaseUrlInterceptorService } from './services/_interceptors/base-url-interceptor/base-url-interceptor.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideAnimations(),
    importProvidersFrom(
      NgxsModule.forRoot([AppState], {
        developmentMode: isDevMode(),
      })
    ),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          apiKey: 'AIzaSyAeliQGqlUXN-ZzWf2i0DYmkeJAhj_dJdY',
          authDomain: 'dilagro-49a70.firebaseapp.com',
          projectId: 'dilagro-49a70',
          storageBucket: 'dilagro-49a70.appspot.com',
          messagingSenderId: '650246761107',
          appId: '1:650246761107:web:8b3c5b945da653a25fbb66',
        })
      )
    ),
    importProvidersFrom(
      AngularFireModule.initializeApp({
        apiKey: 'AIzaSyAeliQGqlUXN-ZzWf2i0DYmkeJAhj_dJdY',
        authDomain: 'dilagro-49a70.firebaseapp.com',
        projectId: 'dilagro-49a70',
        storageBucket: 'dilagro-49a70.appspot.com',
        messagingSenderId: '650246761107',
        appId: '1:650246761107:web:8b3c5b945da653a25fbb66',
      })
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(HttpClientModule),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptorService,
      multi: true,
    },
    importProvidersFrom(MatMomentDateModule),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
};
