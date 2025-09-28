import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { map } from 'rxjs/operators';
import {AuthService} from '../../service/auth/auth.service';
import {catchError, of, tap} from 'rxjs';

export const loginGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const loggedIn = authService.isLoggedIn(); // boolean
  if (loggedIn) {
    router.navigateByUrl('/home').then();
    return false; // redirige les utilisateurs déjà connectés
  }
  return true; // permet l'accès à la page login
};

