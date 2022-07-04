import { Injectable } from '@angular/core';
import { collection, collectionData, doc, Firestore,  query, updateDoc } from '@angular/fire/firestore';
import { addDoc, orderBy} from '@firebase/firestore';
import OrderFirebase from '../interfaces/orders-firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersFirebaseService {

  constructor(private firestore: Firestore){}

  async addOrderToFirebase(order: OrderFirebase){
    const ordenRef = collection(this.firestore, 'ordenes');
    const ann = await addDoc(ordenRef, order);
    order.id = ann.id;
  }

  getOrders(): Observable<any[]>{
    const ordenRef = collection(this.firestore, 'ordenes');
    const  queryRef = query(ordenRef,orderBy('Date', 'desc'));
    return collectionData(queryRef, {idField: 'id'}) as Observable<any[]>;
  }

  updateStatusOrder(order: OrderFirebase, statusValue: string):Promise<any>{
    const docRef = doc(this.firestore, "ordenes", String(order.id));
    return updateDoc(docRef,{Status: statusValue})
  }

  updateTimerOrder(order: OrderFirebase, timer: number):Promise<any>{
    const docRef = doc(this.firestore, "ordenes", String(order.id));
    return updateDoc(docRef,{Timer: timer});
  }

}
