import { Component, Input, Output, EventEmitter, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.svg',
  styleUrls: ['./clock.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ClockComponent),
      multi: true
    }
  ]
})
export class ClockComponent implements OnInit {
  @Input() segments: number;

  parts: {path : string, fill : string}[];

  onChange = (_: number) => {};

  private progress : number;

  constructor() {
  }

  redraw(): void {
    const radius = 49;

    const points : {x : number, y : number}[] = [];

    let degree = -0.5 * Math.PI;

    for (let i = 0; i < this.segments; i++) {
      const x = 50 + Math.cos(degree) * radius;
      const y = 50 + Math.sin(degree) * radius;

      points.push({ x, y });

      degree += 2 * Math.PI * (1 / this.segments);
    }

    this.parts = [];

    for (let i = 0; i < this.segments; i++) {
      const a = points[i];
      const b = points[(i + 1) % points.length];
      const fill = i < this.progress;
      this.parts.push({
        path: `M 50 50 L ${a.x} ${a.y} A ${radius} ${radius} 0 0 1 ${b.x} ${b.y} Z`,
        fill: fill ? 'black' : 'none',
      });
    }
  }

  ngOnInit(): void {
    this.redraw();
  }

  click() {
    this.progress = (this.progress + 1) % (this.segments + 1);
    this.redraw();

    this.onChange(this.progress);
  }

  registerOnChange(onChange) {
    this.onChange = onChange;
  }

  registerOnTouched() {}

  writeValue(value) {
    this.progress = value;
    this.redraw();
  }
}
