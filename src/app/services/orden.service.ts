import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Order } from '../interfaces/order';
import OrderFirebase from '../interfaces/orders-firebase';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  constructor(private firestore: Firestore) { }

  addOrderToFirebase(orden: OrderFirebase){
    const ordenRef = collection(this.firestore, 'ordenes');
    return addDoc(ordenRef, orden)
  }

  getOrdens(): Observable<any[]>{
    const ordenRef = collection(this.firestore, 'ordenes');
    return collectionData(ordenRef, {idField: 'id'}) as Observable<any[]>;
  }
}

export class OrderService {
 private orderSummary: Order[] = [];

 addOrder(order: Order){
  this.orderSummary.push(order);
 }

 increaseProduct(index: number){
  this.orderSummary[index].count++;
  return this.orderSummary;
 }
 decreaseProduct(index: number){
  if(this.orderSummary[index].count>0)
    this.orderSummary[index].count--;
 }

 getOrderSummary (){
  return this.orderSummary;
 }

 deleteOneOrder(index: number){
  return this.orderSummary.splice(index, 1)
 }
}
