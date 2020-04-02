import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css'],
})
export class CharacterSheetComponent implements OnInit {
  character: Observable<any>;

  @Input()
  id: string;

  constructor(private store: AngularFirestore) {
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
