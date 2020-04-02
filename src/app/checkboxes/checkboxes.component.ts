import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxesComponent),
      multi: true
    }
  ]
})
export class CheckboxesComponent implements OnInit, ControlValueAccessor {
  ticked : number;
  boxes : any;

  onChange = (_: number) => {};

  constructor() {
    this.ticked = 0;
    this.boxes = [];
    for (let i = 0; i < 8; i++) {
      this.boxes.push({value: true});
    }
  }

  ngOnInit(): void {}

  check(index, value) {
    this.ticked = value ? index + 1 : index;
    this.setBoxes();
    this.onChange(this.ticked);
  }

  setBoxes() {
    for (let i = 0; i < this.boxes.length; i++) {
      this.boxes[i].value = i < this.ticked;
    }
  }

  registerOnChange(onChange) {
    this.onChange = onChange;
  }

  registerOnTouched() {}

  writeValue(value) {
    this.ticked = value;
    this.setBoxes();
  }
}
