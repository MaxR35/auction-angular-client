import {Component, Input} from '@angular/core';
import {Sale} from '../../../../shared/models/sale';
import {NgOptimizedImage} from '@angular/common';
import {NgIcon, provideIcons} from '@ng-icons/core';
import {remixArrowRightUpLine} from '@ng-icons/remixicon';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-mini-card',
  imports: [
    NgOptimizedImage,
    NgIcon,
    RouterLink,
  ],
  templateUrl: './mini-card.component.html',
  styleUrl: './mini-card.component.css',
  viewProviders: [provideIcons({remixArrowRightUpLine})]

})
export class MiniCardComponent {
  @Input({required: true}) data!: Sale;
}
