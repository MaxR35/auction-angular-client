import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { hugeAuction } from '@ng-icons/huge-icons';
import { akarHome, akarBell } from '@ng-icons/akar-icons';
import { remixPlayListAddLine } from '@ng-icons/remixicon';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-menu-item',
  imports: [NgIcon, RouterLink],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css',
  viewProviders: [provideIcons({ hugeAuction, akarHome, akarBell, remixPlayListAddLine })]
})
export class MenuItemComponent {
  @Input() nameIcon!: string;
  @Input() href!: string;

  protected readonly provideIcons = provideIcons;
}
