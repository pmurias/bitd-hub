import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css'],
})
export class CharacterSheetComponent implements OnInit {
  character: Observable<any>;
  id: string;

  constructor(private store: AngularFirestore) {
    this.id = 'npc';
  }

  ngOnInit(): void {
    this.id
    this.character = this.store
      .collection('characters').doc(this.id)
      .valueChanges();
  }

  update(data) {
    this.store.collection('characters').doc(this.id).update(data);
  }
}
