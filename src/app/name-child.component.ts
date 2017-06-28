import { Component, Input } from '@angular/core';

@Component({
  selector: 'name-child',
  template: `<h4>"{{name}}"</h4>`
})
export class NameChildComponent {
  private _name = '';

  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }

  get name(): string { return this._name; }
}