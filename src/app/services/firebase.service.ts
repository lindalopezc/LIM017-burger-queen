import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { collection, collectionData, doc, Firestore,  query, updateDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { addDoc, orderBy} from '@firebase/firestore';
import { Observable } from 'rxjs';
import OrderFirebase from '../interfaces/orders-firebase';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  constructor(private auth: Auth,
     private firestore: Firestore,
     private router: Router){ }

  register({ email, password }: any){
   return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({email, password}:any){
    return signInWithEmailAndPassword(this.auth, email, password)
    .then(response => {
      const email: any = response.user.email;

      if(/waiter.bq.com/.test(email)){
        this.router.navigate(['/waiter/menu']);
      }
      else if(/chef.bq.com/.test(email)){
        this.router.navigate(['/chef']);
      }
      else if(/admin.bq.com/.test(email)){
        this.router.navigate(['/admin']);
      }
    })
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
}
