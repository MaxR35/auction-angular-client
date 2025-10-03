import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {catchError, switchMap, throwError} from 'rxjs';
import {AuthService} from '../services/security/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService)

  return next(req).pipe(catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        if (authService.isLoggedIn$()) {return authService.loadProfile().pipe(
            switchMap(() => next(req)),
            catchError((refreshError) => {
              authService.logout();
              return throwError(() => refreshError);
            })
          );
        } else {
          authService.logout();
        }
      }
      return throwError(() => error);
    })
  )
};
