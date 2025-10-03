import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Category} from '../../../../shared/models/category';

@Component({
  selector: 'app-category-filter-chip',
  imports: [],
  templateUrl: './category-filter-chip.component.html',
  styleUrl: './category-filter-chip.component.css'
})
export class CategoryFilterChipComponent {
  @Input() category: Category | null = null;
  @Input() active = false;

  @Output() selected = new EventEmitter<Category | null>();

  onSelected() {
    this.selected.emit(this.category);
  }
}
