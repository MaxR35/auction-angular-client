// auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import {map, take, tap} from 'rxjs/operators';
import {AuthService} from '../../service/auth/auth.service';
import {catchError, of} from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // si user complet (profile chargé) → ok
  if (authService.isLoggedIn() && authService.currentUser()?.profile) return of(true);

  // sinon charge le profile
  return authService.loadProfile().pipe(
    map(u => !!u),
    tap(loggedIn => {
      if (!loggedIn) router.navigateByUrl('/login').then();
    }),
    take(1)
  );
};

