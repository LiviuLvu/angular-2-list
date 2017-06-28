import { Component, AfterViewInit, ViewChild  } from '@angular/core';
import { CountdownTimerComponent }  from './countdown-timer.component';

@Component({
  selector: 'countdown-parent-lv',
  template: `
  <h3>Countdown to Liftoff -- Local variable</h3>
  <button (click)="timer.start()">Start</button>
  <button (click)="timer.stop()">Stop</button>
  <div class="seconds">{{timer.seconds}}</div>
  <countdown-timer #timer></countdown-timer>
  `
})
export class CountdownParentComponent { }

@Component({
  selector: 'countdown-parent-vc',
  template: `
  <h3>Countdown to Liftoff -- using View child</h3>
  <button (click)="start()">Start</button>
  <button (click)="stop()">Stop</button>
  <div class="seconds">{{seconds()}}</div>
  <countdown-timer></countdown-timer>
  `
})
export class CountdownParentViewChildComponent implements AfterViewInit {
  @ViewChild(CountdownTimerComponent) private timerComponent: CountdownTimerComponent;

  seconds() { return 0; }

  ngAfterViewInit() {
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 2000);
  }

  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }
}