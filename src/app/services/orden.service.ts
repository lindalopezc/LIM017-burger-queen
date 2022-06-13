import { Injectable } from '@angular/core';
import { collection, Firestore } from '@angular/fire/firestore';
import { addDoc } from '@firebase/firestore';
import { Orden, Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})

export class firebaseService {

  constructor(private firestore: Firestore) { }

  addOrderToFirebase(orden: Orden){
    const ordenRef = collection(this.firestore, 'ordenes');
    return addDoc(ordenRef, orden)
  }
}

export class OrderService {
 orderSummary: any = []; // este array irá guardando los productos que iran en la cuenta.

 addOrder(order: Product){
  order.count=1;
  this.orderSummary.push(order);
 }

 increaseProduct(order: Product){
  order.count++;
 }
}
