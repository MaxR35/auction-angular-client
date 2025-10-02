import {Component, Input} from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { remixPokerHeartsFill, remixPokerHeartsLine, remixArrowRightUpLine } from '@ng-icons/remixicon';

import {Sale} from '../../../models/sale';
import {UserLayoutComponent} from '../user-layout.component/user-layout.component';
import {MoneyComponent} from '../money-icon.component/money.component';
import {LikeComponent} from '../like.component/like.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [UserLayoutComponent, MoneyComponent, LikeComponent, NgIcon, RouterLink,],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  viewProviders: [provideIcons({remixArrowRightUpLine})]
})
export class CardComponent {
  @Input() data!: Sale;
  @Input() tabIndex!: number;
}
