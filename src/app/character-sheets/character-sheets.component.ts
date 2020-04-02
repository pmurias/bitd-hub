import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { firestore } from 'firebase/app';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-character-sheets',
  templateUrl: './character-sheets.component.html',
  styleUrls: ['./character-sheets.component.css']
})
export class CharacterSheetsComponent implements OnInit {
  characters: Observable<any[]>;

  ngOnInit(): void {
    this.characters = this.store
      .collection('characters', ref => ref.orderBy('created'))
      .valueChanges({ idField: 'id' });
  }

  constructor(private store: AngularFirestore) {
  }

  add(): void {
    console.log(this.store);
    this.store.collection('characters').add({
      created: firestore.FieldValue.serverTimestamp(),
    });
  }

  remove(id): void {
    this.store
      .collection('characters')
      .doc(id)
      .delete();
  }

  trackById(character) {
    return character.id;
  }
}
