import {Component, OnInit} from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';

@Component({
  selector: 'app-bmi-form',
  templateUrl: './bmi-form.component.html',
  styleUrls: ['./bmi-form.component.less']
})
export class BmiFormComponent implements OnInit {
  labelPosition = 'man';
  autoTicks = true;
  disabled = false;
  invert = false;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  ageValue = 0;
  weightValue = 0;
  growthValue = 0;

  vertical = false;

  constructor() {
  }

  private _tickInterval = 1;

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }

  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }

  ngOnInit() {
  }

}
