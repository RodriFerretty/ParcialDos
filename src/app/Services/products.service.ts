import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private firestore: AngularFirestore) { }

  getAllProducts(): Observable<Product[]> {
    return this.firestore.collection('dogs').snapshotChanges().pipe(
      // Again we want to build a Typed JS Object from the Document
      map(changes => {
        return changes.map(a => {
            const data = a.payload.doc.data() as Product;
            data.id = a.payload.doc.id;
            return data;
        });
    })
    )
  }
}

export class Product {
  id: string;
  name: string;
  longDescription: string;
  shortDescription: string;
  pictures: string[];
}