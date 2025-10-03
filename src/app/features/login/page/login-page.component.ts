import {Router} from '@angular/router';
import {Component, inject} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {NgClass} from '@angular/common';
import {HttpErrorResponse} from '@angular/common/http';
import {AuthService} from '../../../core/services/security/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  imports: [
    FormsModule,
    NgClass,
    //
  ],
  standalone: true,
})
export class LoginPageComponent {
  username!: string;
  password!: string;
  errorMessage!: string;

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  onSubmit(form: NgForm) {
    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        console.log('logged in successfully');
        this.router.navigateByUrl('/home').then();
      },
      error: (err: HttpErrorResponse) => {
        console.error('Login failed', err);
        this.errorMessage = err.message;
      }
    })
  }
}
