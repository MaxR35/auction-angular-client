import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../../models/user';
import {AuthService} from '../../../service/auth/auth.service';
import {NgOptimizedImage} from '@angular/common';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private readonly authService = inject(AuthService);
  user = this.authService.currentUser();

}
