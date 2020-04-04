import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css'],
})
export class CharacterSheetComponent implements OnInit {
  character: Observable<any>;

  @Input()
  id: string;

  items: any[];

  constructor(private store: AngularFirestore, private itemsService : ItemsService) {
  }

  ngOnInit(): void {
    this.id
    this.character = this.store
      .collection('characters').doc(this.id)
      .valueChanges();

    this.items = this.itemsService.getItems();
  }

  update(data) {
    this.store.collection('characters').doc(this.id).update(data);
  }

  extraBoxes(item) {
    console.log(item, new Array(item.size - 1).fill(true));
    return new Array(item.size - 1).fill(true);
  }
}
