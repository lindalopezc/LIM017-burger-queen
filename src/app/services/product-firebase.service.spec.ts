import { Firestore } from '@angular/fire/firestore';
import { ProductFirebaseService } from './product-firebase.service';

describe('ProductFirebaseService', () => {
  let service: ProductFirebaseService;

  it('should be created', () => {
    const firestoreFake = {};
    service = new ProductFirebaseService(firestoreFake as Firestore);
    expect(service).toBeTruthy();
  });

});
