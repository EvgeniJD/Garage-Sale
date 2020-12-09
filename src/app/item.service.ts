import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { IItem } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private dbPath = '/items';

  itemsRef: AngularFireList<IItem> = null;

  constructor(private db: AngularFireDatabase) {
    this.itemsRef = db.list(this.dbPath);
   }

   createOffer(item: IItem): any {
    return this.itemsRef.push(item);
  }

  // getAllOffers() {
  //   return this.firestore.collection("items").get();
  // }
}
