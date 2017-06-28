import { Component } from '@angular/core';

import { ShowOneTrigger } from "./show-one-trigger";
import { ShowOneContainer } from "./show-one-container";
import { ShowOne } from "./show-one";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color: string;
  fontSizePx = 20;
  collapsed = false;

  onToggle(collapsed) {
    console.log(collapsed);
  }

  reset(input, sample) {
    console.log('clearing input');
    input.value = '';
    sample.color = '#fff';
  }

}
