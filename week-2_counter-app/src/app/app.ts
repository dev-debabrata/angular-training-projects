import { Component } from '@angular/core';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Child],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  counter1 = 0;
  counter2 = 0;

  total = 0;

  updateCounter1(value: number) {
    this.counter1 = value;
    this.calculateTotal();
  }

  updateCounter2(value: number) {
    this.counter2 = value;
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.counter1 + this.counter2;
  }
}
