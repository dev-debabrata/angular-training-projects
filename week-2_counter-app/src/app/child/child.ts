import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child implements OnInit, OnDestroy {
  @Input() initialValue: number = 0;
  @Input() label: string = '';

  @Output() countChanged = new EventEmitter<number>();

  count: number = 0;
  counterLabel: string = '';

  ngOnInit(): void {
    this.count = this.initialValue;
    this.counterLabel = this.label;
    this.countChanged.emit(this.count);
  }

  increment() {
    this.count++;
    this.countChanged.emit(this.count);
  }

  decrement() {
    this.count--;
    this.countChanged.emit(this.count);
  }

  reset() {
    this.count = this.initialValue;
    this.countChanged.emit(this.count);
  }

  ngOnDestroy(): void {
    console.log('Counter destroyed');
  }
}
