import {Component, Input} from '@angular/core';
import {Bid} from '../../../../shared/models/bid';
import {NgDatePipesModule} from 'ngx-pipes';
import {environment} from '../../../../../environments/environment';
import {MoneyComponent} from '../../../../shared/components/money-icon.component/money.component';
import {UserBadgeComponent} from '../../../../shared/components/user-layout.component/user-badge.component';

@Component({
  selector: 'app-bid',
  imports: [
    NgDatePipesModule,
    MoneyComponent,
    UserBadgeComponent
  ],
  templateUrl: './bid.component.html',
  styleUrl: './bid.component.css'
})
export class BidComponent {
  @Input({required: true}) bid: Bid | undefined

  getTime(): Date {
    return new Date(this.bid!.bidTime);
  }

  protected readonly environment = environment;
}
