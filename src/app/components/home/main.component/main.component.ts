import {Component, inject, OnInit} from '@angular/core';
import {CardComponent} from '../../shared/card.component/card.component';
import {SaleService} from '../../../service/sale/sale.service';

@Component({
  selector: 'app-main',
  imports: [
    CardComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  private readonly saleService: SaleService = inject(SaleService);
  protected saleLst$ = this.saleService.sales$;

  ngOnInit() {
    this.saleService.getSales().subscribe();
  }
}
