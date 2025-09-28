import { Component } from '@angular/core';
import {MenuItemComponent} from '../menu-item.component/menu-item.component';

@Component({
  selector: 'app-user-menu',
  imports: [
    MenuItemComponent
  ],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.css'
})
export class UserMenuComponent {

}
