import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class Highlight {
  constructor(private el: ElementRef) {}
  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.boxShadow = '0 0 10px rgba(3, 51, 244, 0.59)';
    // this.el.nativeElement.style.backgroundColor = '#f1f3f5';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.boxShadow = 'none';
    // this.el.nativeElement.style.backgroundColor = '';
  }
}
// #d1d4d4

// #f1f3f5
