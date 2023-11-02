import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.filteredProducts = [...this.products];
    });
  }

  search(query: string) {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  filterByPrice(minPrice: number, maxPrice: number) {
    this.filteredProducts = this.products.filter(product =>
      product.price >= minPrice && product.price <= maxPrice
    );
  }
}
