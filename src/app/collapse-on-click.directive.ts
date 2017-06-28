import { Directive, HostBinding, HostListener, EventEmitter, Input, Output } from "@angular/core";

@Directive({
  selector: '[collapse-on-click]',
  exportAs: 'collapsible'
})
export class CollapseOnClick {
  @Input("collapsed") isCollapsed = true;

  @Output("collapsed") collapsedOutput = new EventEmitter();

  @HostListener("click")
  toggle() {
    this.isCollapsed = !this.isCollapsed;
    this.collapsedOutput.emit(this.isCollapsed);
  }

  @HostBinding("class.collapsed")
  get collapsed() {
    return this.isCollapsed;
  }
}