import { Injectable } from '@angular/core';
import { collection, Firestore } from '@angular/fire/firestore';
import { addDoc } from '@firebase/firestore';
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
}

