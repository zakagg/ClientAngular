import { ApplicationConfig, inject, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { appHttpInterceptor } from './services/app-http.interceptor';
import { AppStateService } from './services/app-state.service';
import { LoadingService } from './services/loading.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(
      withFetch(),
      withInterceptors([
        (req, next) => {
          const appStateService = inject(AppStateService);
          const loadingService=inject(LoadingService) // Create an instance or use DI
          return appHttpInterceptor(appStateService,loadingService)(req, next); // Call interceptor directly
        },
      ])
    ),
    ReactiveFormsModule,
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: (appStateService: AppStateService,loadingService:LoadingService) => appHttpInterceptor(appStateService,loadingService),
      deps: [AppStateService,LoadingService],
      multi: true,
    },
    AppStateService,LoadingService
  ]
};
