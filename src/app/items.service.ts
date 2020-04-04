import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  constructor() { }

  getItems() {
    return [
      {size: 1, name: 'A Blade or Two'},
      {size: 1, name: 'Throwing Knives'},
      {size: 1, name: 'A Pistol'},
      {size: 1, name: 'A 2nd Pistol'},
      {size: 2, name: 'A Large Weapon'},
      {size: 1, name: 'An Unusual Weapon'},
      {size: 1, name: 'Burglary Gear'},
      {size: 2, name: 'Climbing Gear'},
      {size: 1, name: 'Arcane Implements'},
      {size: 1, name: 'Documents'},
      {size: 1, name: 'Subterfuge Supplies'},
      {size: 2, name: 'Demolition Tools'},
      {size: 1, name: 'Tinkering Tools'},
      {size: 1, name: 'Lantern'},
//      {size: 1, name: Armor +Heavy'},
    ];
  }
}
