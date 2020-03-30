import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.svg',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent implements OnInit {
  @Input() segments: number;

  @Output() progressed = new EventEmitter<number>();

  @Input() progress: number;
  parts: {path : string, fill : string}[];

  constructor() {}

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
    const newProgress = (this.progress + 1) % (this.segments + 1);
    this.progressed.emit(newProgress);
  }
}
