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
