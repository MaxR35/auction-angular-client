import {Component, Input} from '@angular/core';
import {NgIcon, provideIcons} from '@ng-icons/core';
import {mynaLetterAWavesSolid} from '@ng-icons/mynaui/solid';

@Component({
  selector: 'app-money',
  imports: [
    NgIcon,
  ],
  providers: [
    provideIcons({mynaLetterAWavesSolid})
  ],
  templateUrl: './money.component.html',
  styleUrl: './money.component.css'
})
export class MoneyComponent {
  @Input() value!: number;
  @Input() size: string = '1em';
  @Input() color: string = '#000';
}
