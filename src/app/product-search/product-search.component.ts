import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent {
  @Output() searchChange = new EventEmitter<string>();
  @Output() filterPrice = new EventEmitter<{ minPrice: number, maxPrice: number }>();

  onSearchChange(value: string) {
    this.searchChange.emit(value);
  }

  onFilterClick(minPrice: number, maxPrice: number) {
    this.filterPrice.emit({ minPrice, maxPrice });
  }
}
