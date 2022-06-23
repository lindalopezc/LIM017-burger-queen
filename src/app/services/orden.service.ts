import { Injectable } from '@angular/core';
import { collection, collectionData, doc, Firestore,  query, updateDoc } from '@angular/fire/firestore';
import { addDoc, orderBy} from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Order } from '../interfaces/order';
import OrderFirebase from '../interfaces/orders-firebase';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  constructor(private firestore: Firestore) { }

  async addOrderToFirebase(orden: OrderFirebase){
    console.log(orden)
    const ordenRef = collection(this.firestore, 'ordenes');
    const ann = await addDoc(ordenRef, orden)
    orden.id = ann.id
    return ann;
  }

  getOrdens(): Observable<any[]>{
    const ordenRef = collection(this.firestore, 'ordenes');
    const  queryRef = query(ordenRef,orderBy('Date', 'desc'));
    return collectionData(queryRef, {idField: 'id'}) as Observable<any[]>;
  }
  updateOrder(order: OrderFirebase, statusValue: string):Promise<any>{

    const docRef = doc(this.firestore, "ordenes", String(order.id));
    const queryRef = this.getOrdens();
    return updateDoc(docRef,{Status: statusValue})
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

 clearOrderSummary(){
  this.orderSummary = [];
 }
}
