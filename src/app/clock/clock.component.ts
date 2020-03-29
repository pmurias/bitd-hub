import { Component, Input, OnInit  } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.svg',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {
  x : number;
  y : number;

  @Input() segments : number;

  degree : number;
 
  radius : number;

  points : any;

  parts : any;

  ngOnInit(): void {
    this.radius = 50;

    this.points = [];

    let degree = 0;

    console.log('segments', this.segments);

    for (let i = 0; i < this.segments; i++) {
      const x = 50 + Math.cos(degree) * this.radius;
      const y = 50 + Math.sin(degree) * this.radius;
      this.points.push({x, y});
      degree += 2 * Math.PI * (1 / this.segments);
    }

    this.parts = [];

    for (let i = 0; i < this.segments ; i++) {
      const a = this.points[i];
      const b = this.points[(i + 1) % this.points.length];
      this.parts.push({path: `M 50 50 L ${a.x} ${a.y} A ${this.radius} ${this.radius} 0 0 1 ${b.x} ${b.y} Z`, fill: (i % 2 == 0 ? 'black' : 'none')});
    }

    console.log(this.parts);
  }

  click() {
    console.log('click');
  }
}
