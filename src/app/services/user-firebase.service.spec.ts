import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { UserFirebaseService } from './user-firebase.service';

describe('UserFirebaseService', () => {
  let service: UserFirebaseService;
  it('should be created', () => {
    const firestoreFake = {};
    const authFake = {};
    service = new UserFirebaseService(authFake as Auth, firestoreFake as Firestore );
    expect(service).toBeTruthy();
  });
});
