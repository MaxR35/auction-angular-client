import {Component} from '@angular/core';
import {UserMenuComponent} from '../user-menu.component/user-menu.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-app-layout',
  imports: [
    UserMenuComponent,
    RouterOutlet,
  ],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.css'
})
export class AppLayoutComponent {
}
