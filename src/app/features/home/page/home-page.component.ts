import {Component, inject} from '@angular/core';
import {CardComponent} from '../components/card/card.component';
import {CategoryRowComponent} from '../components/category-row/category-row.component';
import {SaleService} from '../../../core/services/sale.service';
import {BreadcrumbComponent} from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-home',
  imports: [
    CardComponent,
    CategoryRowComponent,
    BreadcrumbComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  private readonly saleService: SaleService = inject(SaleService);
  protected saleLst$ = this.saleService.sales$;

  ngOnInit() {
    this.saleService.getSales().subscribe();
  }
}
