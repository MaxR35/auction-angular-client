import {Component, inject} from '@angular/core';
import {CardComponent} from '../../shared/card.component/card.component';
import {CategoryListComponent} from '../category-list.component/category-list.component';
import {SaleService} from '../../../service/sale/sale.service';

@Component({
  selector: 'app-home',
  imports: [
    CardComponent,
    CategoryListComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private readonly saleService: SaleService = inject(SaleService);

  protected saleLst$ = this.saleService.filteredSales$;
  protected categoryLst$ = this.saleService.categories$;

  ngOnInit() {
    this.saleService.getSales().subscribe();
    this.saleService.getCategories().subscribe();
  }
}
