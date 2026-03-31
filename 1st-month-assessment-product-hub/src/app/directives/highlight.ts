import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class Highlight {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.boxShadow = 'none';
  }
}
