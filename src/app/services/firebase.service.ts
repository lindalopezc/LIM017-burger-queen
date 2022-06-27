import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { collection, collectionData, doc, Firestore,  query, updateDoc } from '@angular/fire/firestore';
import { addDoc, orderBy} from '@firebase/firestore';
import { Observable } from 'rxjs';
import OrderFirebase from '../interfaces/orders-firebase';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  constructor(private auth: Auth, private firestore: Firestore){ }

  register({ email, password }: any){
   return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({email, password}:any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  signOut(){
    return signOut(this.auth);
  }

  async addOrderToFirebase(order: OrderFirebase){
    const ordenRef = collection(this.firestore, 'ordenes');
    const ann = await addDoc(ordenRef, order);
    order.id = ann.id;
    return ann;
  }

  getOrders(): Observable<any[]>{
    const ordenRef = collection(this.firestore, 'ordenes');
    const  queryRef = query(ordenRef,orderBy('Date', 'desc'));
    return collectionData(queryRef, {idField: 'id'}) as Observable<any[]>;
  }
<<<<<<< HEAD
  updateOrder(order: OrderFirebase, statusValue: string):Promise<any>{

    const docRef = doc(this.firestore, "ordenes", String(order.id));

    return updateDoc(docRef,{Status: statusValue})
   }
=======

  updateStatusOrder(order: OrderFirebase, statusValue: string):Promise<any>{
    const docRef = doc(this.firestore, "ordenes", String(order.id));
    const queryRef = this.getOrders();
    return updateDoc(docRef,{Status: statusValue})
  }

  updateTimerOrder(order: OrderFirebase, timer: number):Promise<any>{
    const docRef = doc(this.firestore, "ordenes", String(order.id));
    const queryRef = this.getOrders();
    return updateDoc(docRef,{Timer: timer});
  }
>>>>>>> e3de697ba36d0b218784c128c88145646ab03db9
}
