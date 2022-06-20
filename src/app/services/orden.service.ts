import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Order } from '../interfaces/order';
import OrderFirebase from '../interfaces/orders-firebase';


@Injectable({
  providedIn: 'root'
})

export class firebaseService {

  constructor(private firestore: Firestore) { }

  addOrderToFirebase(orden: OrderFirebase){
    const ordenRef = collection(this.firestore, 'ordenes');
    return addDoc(ordenRef, orden)
  }

  getOrdens(): Observable<any[]>{
    const ordenRef = collection(this.firestore, 'orden');
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

  getOrderSummary (){
    return this.orderSummary;
  }
}


