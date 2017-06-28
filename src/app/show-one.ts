import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: '[ShowOne]'
})
export class ShowOne {

  @Input("showOne") id: String;

  @Input() active = false;

  @HostBinding('hidden')
  get hidden() { return !this.active };

}