import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { ProductList } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
