import {Component, inject, Input} from '@angular/core';
import {Category} from '../../../models/category';
import {CategoryFilterChipComponent} from '../category-filter-chip.component/category-filter-chip.component';
import {SaleService} from '../../../service/sale/sale.service';

@Component({
  selector: 'app-category-list',
  imports: [
    CategoryFilterChipComponent
  ],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
  protected readonly saleService = inject(SaleService);

  @Input() categories!: Category[];

  onSelectedCategory(cat: Category | null) {
    this.saleService.selectCategory(cat);
  }
}
