import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.css'],
})
export class CheckboxesComponent implements OnInit {
  ticked : number;
  boxes : any;

  constructor() {
    this.ticked = 0;
    this.boxes = [];
    for (let i = 0; i < 8; i++) {
      this.boxes.push({value: true});
    }
  }

  ngOnInit(): void {}

  check(index, value) {
    console.log('check', index, value);
    this.ticked = value ? index + 1 : index;

    for (let i = 0; i < this.boxes.length; i++) {
      this.boxes[i].value = i < this.ticked;
    }
  }
}
