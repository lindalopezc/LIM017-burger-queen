import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';
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

  getOrdens(): Observable<any[]>{
    const ordenRef = collection(this.firestore, 'orden');
    return collectionData(ordenRef, {idField: 'id'}) as Observable<any[]>;
  }
}

export class OrderService {
 orderSummary: any = [];

 addOrder(order: Product){
  order.count=1;
  this.orderSummary.push(order);
 }
getOrders(){
  return this.orderSummary;
}
clearCart(){
  this.orderSummary = [];
  return this.orderSummary;
}
 increaseProduct(order: Product){
  order.count++;
 }
}
