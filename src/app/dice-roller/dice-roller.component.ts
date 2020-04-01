import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';
import { firestore } from 'firebase/app';
import { Howl } from 'howler';

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.css'],
})
export class DiceRollerComponent {
  dice: Observable<any[]>;
  private currentDice: any[];

  private sounds: Howl[];

  constructor(private store: AngularFirestore) {
  }

  ngOnInit(): void {
    this.dice = this.store
      .collection('dice', ref => ref.orderBy('rolledAt'))
      .valueChanges({ idField: 'id' });

    this.sounds = [];
    for (let i = 1; i <= 4; i++) {
      this.sounds.push(new Howl({src: [
        'assets/roll' + i + '.mp3'
      ]}));
    }

    this.dice.subscribe(currentDice => (this.currentDice = currentDice));
  }

  roll(): void {
    this.sounds[Math.floor(Math.random() * this.sounds.length)].play();
    const rollValue : number = Math.ceil(Math.random() * 6);
    this.store.collection('dice').add({
      value: rollValue,
      rolledAt: firestore.FieldValue.serverTimestamp(),
    });
  }

  reset(): void {
    for (const die of this.currentDice) {
      this.store.doc('dice/' + die.id).delete();
    }
  }
}
