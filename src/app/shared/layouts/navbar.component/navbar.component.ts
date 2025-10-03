import {Component, inject} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {MoneyComponent} from '../../components/money-icon.component/money.component';
import {AuthService} from '../../../core/services/security/auth.service';

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
  protected profile$ = this.authService.currentProfile$;

  ngOnInit() {
    this.authService.loadProfile().subscribe()
  }
}
