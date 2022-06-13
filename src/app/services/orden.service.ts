import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Orden } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private firestore: Firestore) { }
  addOrden(orden: Orden)
  {
    const ordenRef = collection(this.firestore, 'ordenes');
    return addDoc(ordenRef, orden)
  }

  getOrdens(): Observable<any[]>{
    const ordenRef = collection(this.firestore, 'orden');
    return collectionData(ordenRef, {idField: 'id'}) as Observable<any[]>;
  }
}

