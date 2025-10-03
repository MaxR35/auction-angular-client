import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import {AuthService} from '../services/security/auth.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const loggedIn = authService.isLoggedIn$();
  if (loggedIn) {
    router.navigateByUrl('/home').then();
    return false;
  }
  return true;
};

