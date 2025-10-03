// auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import {map, take, tap} from 'rxjs/operators';
import {catchError, of} from 'rxjs';
import {AuthService} from '../services/security/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn$() && authService.currentProfile$())
    return of(true);

  // sinon charge le profile
  //TODO : à refaire de maniere propre
  return authService.loadProfile().pipe(
    map(profile => !!profile),
    catchError(err => {
      if (err.status === 401) {
        router.navigateByUrl('/login').then();
        return of(false);
      }
      return of(false); // par défaut on refuse l'accès
    }),
    tap(loggedIn => {
      if (!loggedIn) router.navigateByUrl('/login').then();
    }),
    take(1)
  );
};

