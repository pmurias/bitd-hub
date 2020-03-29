import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import {firestore} from 'firebase/app';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  clocks: Observable<any[]>;

  clockName: string;

  constructor(private firestore: AngularFirestore) {
    this.clocks = this.firestore.collection('clocks',
      ref => ref.orderBy('created')
    ).valueChanges({idField: 'id'});
  }

  add(name, segments) {
    this.firestore.collection('clocks').add({
      name: (name || ''),
      segments,
      progress: 0,
      created: firestore.FieldValue.serverTimestamp()
    });
  }

  remove(id) {
    this.firestore.collection('clocks').doc(id).delete();
  }

  clockProgress(progress, id) {
    console.log('progressed clock to', progress, id);
    this.firestore.collection('clocks').doc(id).update({progress});
  }

  ngOnInit(): void {
  }

}
