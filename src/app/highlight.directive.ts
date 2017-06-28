import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class HighlightDirective {

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  constructor(private el: ElementRef) { }

  @Input() highlightColor: string;
  @Input() defaultColor: string;

  @HostListener('mouseenter') onmouseenter() {
    this.highlight(this.highlightColor || this.defaultColor || 'lightgray');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.highlight(null);
  }

}
