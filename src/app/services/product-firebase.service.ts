import { Injectable } from '@angular/core';
import { addDoc, collectionData, deleteDoc, doc, Firestore,orderBy, query, setDoc, updateDoc } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
import Product from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductFirebaseService {

  async createProduct(product: any){
    if(product.typeProduct!== "Burger")
      {
        product = {name:product.name, url:product.url,  price:product.price, typeProduct: product.typeProduct};
      }
    const cityRef = doc(collection(this.firestore, 'products'));
      setDoc(cityRef, product).then(e=>console.log('holi boli',e));
  }

  getProducts(): Observable<any[]>{
    const refProducts = collection(this.firestore, 'products');
    const  queryRef = query(refProducts,orderBy('listProduc', 'desc'));
    return collectionData(refProducts, {idField: 'id'}) as Observable<any[]>;
  }

  getProduct(product: Product){

    return doc(this.firestore, "products", String(product.id));
  }
  updateProduct(id: string | undefined, product: Product){
    const docRef = doc(this.firestore, "products", String(id));
    return updateDoc(docRef, {
      name: product.name, url: product.url,
      type: product.type
    })
  }
  deleteProduct(product: Product){
    const docRef = doc(this.firestore, "products", String(product.id));

    deleteDoc(docRef);
  }
  constructor(private firestore: Firestore) {   }

}
