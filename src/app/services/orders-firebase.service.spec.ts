import { TestBed } from '@angular/core/testing';

import { OrdersFirebaseService } from './orders-firebase.service';

describe('OrdersFirebaseService', () => {
  let service: OrdersFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
