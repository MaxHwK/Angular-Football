import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Footballers } from 'src/app/models/footballers.model';

@Injectable({
  providedIn: 'root'
})

export class FootballersService {

  private dbPath = '/footballers';
  footballersRef: AngularFirestoreCollection<Footballers>;

  constructor(
    private db: AngularFirestore
  ) {
    this.footballersRef = db.collection(this.dbPath);
  }

  getAllFootballers(): any {
    return this.footballersRef.snapshotChanges().pipe(
      map((changes:any) => {
        return changes.map((doc:any) => {
            return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  saveNewFootballers(footballer: Footballers): any {
    return new Observable(obs => {
      this.footballersRef.add({...footballer}).then(() => {
        obs.next();
      })
    })
  }

  get(id: any): any {
    return new Observable(obs => {
      this.footballersRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(footballer: Footballers) {
    return new Observable(obs => {
      this.footballersRef.doc(footballer.id).update(footballer);
      obs.next();
    });
  }

  delete(id: any) {
    this.db.doc(`footballers/${id}`).delete();
  }

}
