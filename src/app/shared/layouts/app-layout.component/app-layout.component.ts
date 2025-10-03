import {Component} from '@angular/core';
import {UserMenuComponent} from '../user-menu.component/user-menu.component';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from '../navbar.component/navbar.component';

@Component({
  selector: 'app-app-layout',
  imports: [
    RouterOutlet,
    NavbarComponent,
  ],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.css'
})
export class AppLayoutComponent {
}
