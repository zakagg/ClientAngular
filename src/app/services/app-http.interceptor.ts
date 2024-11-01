import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, finalize, tap, throwError } from 'rxjs';
import { AppStateService } from './app-state.service';
import { LoadingService } from './loading.service';

export const appHttpInterceptor = (appStateService: AppStateService, loadingService: LoadingService): HttpInterceptorFn => {
  loadingService.showLoading();
  return (req, next) => {
    console.log('Interceptor is running');
    console.log(appStateService.getProductState()); // Now this will get the injected instance

    const token = 'Bearer JWT'; // Replace with your actual token logic
    const request = req.clone({
      headers: req.headers.append('Authorization', token),
    });

    //console.log('Request URL:', request.url);
    //console.log('Request Headers:', request.headers.keys());

    return next(request).pipe(
      tap(event => {
        //console.log('Response event:', event);
        appStateService.setProductState({status:1})
      }),
      catchError(error => {
        //console.error('Request error:', error);
        appStateService.setProductState({status:0,errorMessage:error})
        return throwError(() => error);
      }),
      finalize(()=>loadingService.hideLoading())
    );
  };
};
