import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MoneyComponent} from '../money-icon.component/money.component';

@Component({
  selector: 'app-button',
  imports: [
    MoneyComponent
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input({ required: true }) initialValue: number = 0;
  protected bid: number = 1;

  public onPlusClick(): void {
    this.bid++;
  }

  public onMinusClick(): void {
    if(this.bid > 1) {
      this.bid--;
    }
  }
}
