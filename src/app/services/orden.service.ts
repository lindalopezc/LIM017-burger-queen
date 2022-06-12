import { Injectable } from '@angular/core';
import { collection, Firestore } from '@angular/fire/firestore';
import { addDoc } from '@firebase/firestore';
import Product from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  constructor(private firestore: Firestore) { }
  addOrden(orden: Product[])
  {const jsonOrden = {...orden};
  console.log(jsonOrden)
    const ordenRef = collection(this.firestore, 'orden');
    return addDoc(ordenRef, jsonOrden)
  }
}
