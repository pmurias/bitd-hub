import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.css']
})
export class DiceRollerComponent implements OnInit {

  // '⚀⚁⚂⚃⚄⚅'
  constructor() {
    this.dice = '';
  }

  ngOnInit(): void {
  }

  roll() : void {
    this.dice += '⚂';
    console.log("rolling");
  }

  reset() : void {
    this.dice = '';
    console.log("reset");
  }
}