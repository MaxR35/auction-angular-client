import {Component, Input} from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { remixArrowRightUpLine } from '@ng-icons/remixicon';
import {Sale} from '../../../../shared/models/sale';
import {UserBadgeComponent} from '../../../../shared/components/user-layout.component/user-badge.component';
import {MoneyComponent} from '../../../../shared/components/money-icon.component/money.component';
import {RouterLink} from '@angular/router';
import {LikeComponent} from '../../../../shared/components/like.component/like.component';

@Component({
  selector: 'app-card',
  imports: [UserBadgeComponent, MoneyComponent, LikeComponent, NgIcon, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  viewProviders: [provideIcons({remixArrowRightUpLine})]
})
export class CardComponent {
  @Input({required: true}) data!: Sale;
}
