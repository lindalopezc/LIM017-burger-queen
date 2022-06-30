import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, deleteUser, getAuth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { collection, collectionData, deleteDoc, doc, Firestore,  query, setDoc, updateDoc } from '@angular/fire/firestore';
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

  register({ name, email, password, type }: any){
    console.log(email, 'email')
   return createUserWithEmailAndPassword(this.auth, email, password).then(response=>{
    console.log('response', response)
    const user={
      userId : response.user.uid,
      userName : name,
      userEmail : response.user.email,
      userType : type,
      userPassword: password,
    }
    //const ordenRef = collection(this.firestore, 'users');
    //addDoc(ordenRef,user);
    setDoc(doc(this.firestore, "users", response.user.uid),user)
   });
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
        this.router.navigate(['/admin/products']);
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

  getUsers(): Observable<any[]>{
    const ordenRef = collection(this.firestore, 'users');
    const  queryRef = query(ordenRef,orderBy('userName', 'asc'));
    return collectionData(queryRef, {idField: 'id'}) as Observable<any[]>;
  }

  deleteUserFirestore(user: any){
    const docRef = doc(this.firestore, "users", String(user.id));
    deleteDoc(docRef);
  }
  updateUserFirestore(id: string | undefined, user: any){
    const docRef = doc(this.firestore, "products", String(id));
    return updateDoc(docRef, {
      userName: user.userName,
      userPassword: user.userPassword,
      userType: user.userType,
      userEmail: user.userEmail
    })
  }
}
