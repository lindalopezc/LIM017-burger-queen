import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { collection, collectionData, deleteDoc, doc, Firestore,  query, setDoc, updateDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { orderBy} from '@firebase/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UserFirebaseService {
  constructor(private auth: Auth,
     private firestore: Firestore,
     private router: Router){}

  async register({ name, email, password, type }: any){
   const response = await createUserWithEmailAndPassword(this.auth, email, password);
    const user = {
      userId: response.user.uid,
      userName: name,
      userEmail: response.user.email,
      userType: type,
      userPassword: password,
    };
    setDoc(doc(this.firestore, "users", response.user.uid), user);
  }

  async login({email, password}:any){
    const response = await signInWithEmailAndPassword(this.auth, email, password);
    const emailUser: any = response.user.email;
    if (/waiter.bq.com/.test(emailUser)) {
      this.router.navigate(['/waiter/menu']);
    } else if (/chef.bq.com/.test(emailUser)) {
      this.router.navigate(['/chef']);
    } else if (/admin.bq.com/.test(emailUser)) {
      this.router.navigate(['/admin/products']);
    }
  }

  signOut(): Promise<any>{
    return signOut(this.auth);
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

  updateUserFirestore(id: string | undefined, user: any): Promise<any>{
    const docRef = doc(this.firestore, "products", String(id));
    return updateDoc(docRef, {
      userName: user.userName,
      userPassword: user.userPassword,
      userType: user.userType,
      userEmail: user.userEmail
    })
  }

}
