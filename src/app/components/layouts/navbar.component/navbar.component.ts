import {Component, inject} from '@angular/core';
import {AuthService} from '../../../service/auth/auth.service';
import {NgOptimizedImage} from '@angular/common';
import {MoneyComponent} from '../../shared/money-icon.component/money.component';
import {User} from '../../../models/user';

@Component({
  selector: 'app-navbar',
  imports: [
    NgOptimizedImage,
    MoneyComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private readonly authService: AuthService = inject(AuthService);
  user: User | null = this.authService.currentUser();
}
