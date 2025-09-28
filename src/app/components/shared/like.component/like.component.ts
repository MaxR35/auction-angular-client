import {Component, Input} from '@angular/core';
import {NgIcon, provideIcons} from '@ng-icons/core';
import { remixPokerHeartsFill, remixPokerHeartsLine, remixArrowRightUpLine } from '@ng-icons/remixicon';

@Component({
  selector: 'app-like',
  imports: [
    NgIcon
  ],
  providers: [
    provideIcons({remixPokerHeartsFill, remixPokerHeartsLine}),
  ],
  templateUrl: './like.component.html',
  styleUrl: './like.component.css'
})
export class LikeComponent {
  @Input() value: number = 0;
  @Input() sizeValue: string = '16';

  constructor() {
    this.value = Math.floor(Math.random() * 100);
  }
}
