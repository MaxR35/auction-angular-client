import {Component, inject, OnInit} from '@angular/core';
import {Category} from '../../../../shared/models/category';
import {CategoryFilterChipComponent} from '../category-filter-chip/category-filter-chip.component';
import {CategoryService} from '../../../../core/services/category.service';

@Component({
  selector: 'app-category-list',
  imports: [
    CategoryFilterChipComponent
  ],
  templateUrl: './category-row.component.html',
  styleUrl: './category-row.component.css'
})
export class CategoryRowComponent implements OnInit {
  protected readonly categoryService = inject(CategoryService);
  protected categories$ = this.categoryService.categories$;

  onSelectedCategory(cat: Category | null) {
    this.categoryService.selectCategory(cat);
  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe();
  }
}
