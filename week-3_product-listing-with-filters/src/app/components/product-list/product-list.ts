import { Component } from '@angular/core';
import { DUMMY_PRODUCTS } from '../../dummy-product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { Highlight } from '../../directive/highlight';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TruncatePipe, Highlight],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  searchText = '';

  products = DUMMY_PRODUCTS;

  get filteredProducts() {
    return this.products.filter((p) =>
      p.name.toLowerCase().includes(this.searchText.toLowerCase()),
    );
  }
}
