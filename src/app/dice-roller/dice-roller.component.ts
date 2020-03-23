import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.css']
})
export class DiceRollerComponent implements OnInit {
  dice : number[];

  constructor() {
    this.dice = [];
  }

  ngOnInit(): void {
  }

  roll() : void {
    const audio = new Audio('assets/roll.mp3');
    audio.play();
    this.dice.push(Math.ceil(Math.random() * 6));
  }

  reset() : void {
    this.dice = [];
  }
}
