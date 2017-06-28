import { Component } from '@angular/core';

@Component({
  selector: 'name-parent',
  template: `
  <h2>Concert Master controls {{names.length}} names</h2>
  <name-child *ngFor="let name of names" [name]="name"></name-child>
  `
})
export class NameParentComponent {
  names = ['Mozart', ' ', 'Telleman'];
}