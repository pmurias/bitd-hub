import { Component, Input, OnInit  } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.svg',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {
  @Input() segments : number;

  progress : number;
  parts : any;

  constructor() {
    this.progress = 0;
  }

  redraw() : void {
    const radius = 50;

    const points = [];

    let degree = -0.5 * Math.PI;

    console.log('segments', this.segments);

    for (let i = 0; i < this.segments; i++) {
      const x = 50 + Math.cos(degree) * radius;
      const y = 50 + Math.sin(degree) * radius;

      points.push({x, y});

      degree += 2 * Math.PI * (1 / this.segments);
    }

    this.parts = [];

    for (let i = 0; i < this.segments ; i++) {
      const a = points[i];
      const b = points[(i + 1) % points.length];
      const fill = i < this.progress;
      this.parts.push({path: `M 50 50 L ${a.x} ${a.y} A ${radius} ${radius} 0 0 1 ${b.x} ${b.y} Z`, fill: (fill ? 'black' : 'none')});
    }
  }

  ngOnInit(): void {
    this.redraw();
  }

  click() {
    this.progress = (this.progress + 1) % (this.segments + 1);
    this.redraw();
    console.log('click');
  }
}
