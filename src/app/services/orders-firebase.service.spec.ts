import { OrdersFirebaseService } from './orders-firebase.service';
import { Firestore } from '@angular/fire/firestore';

describe('OrdersFirebaseService', () => {
  let service: OrdersFirebaseService;

   it('should be created', () => {
    const firestoreFake = {};
    service = new OrdersFirebaseService(firestoreFake as Firestore);
    expect(service).toBeTruthy();
  });

});
