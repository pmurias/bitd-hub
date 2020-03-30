import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';
import { firestore } from 'firebase/app';

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.css'],
})
export class DiceRollerComponent {
  dice: Observable<any[]>;
  private currentDice: any[];
  constructor(private store: AngularFirestore) {
    this.dice = this.store
      .collection('dice', ref => ref.orderBy('rolledAt'))
      .valueChanges({ idField: 'id' });

    this.dice.subscribe(currentDice => (this.currentDice = currentDice));
  }

  roll(): void {
    const audio = new Audio(
      'assets/roll' + Math.ceil(Math.random() * 4) + '.mp3'
    );
    audio.play();
    const rollValue = Math.ceil(Math.random() * 6);
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
