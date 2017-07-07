import { Component, Input } from 'angular2/core';

@Component({
  selector: 'clock',
  templateUrl: 'src/clock/clock.html'
})

export class Clock {
  @Input() time;
}