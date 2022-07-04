import { TestBed } from '@angular/core/testing';
import { Order } from '../interfaces/order';
import { OrderService } from './order.service';

describe('OrdenService', () => {
  let service: OrderService;
  let order : Order;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderService);
    order = {
      name: 'chicken burger',
      url: 'url',
      price: 15,
      type: 'simple',
      cheese: 2,
      egg: 2,
      count: 5
    }
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start with an empty array', ()=>{
    expect(service.getOrderSummary().length).toBe(0);
  })

  it('should add an order in orderSummary', () => {
    service.addOrder(order);
    expect(service.getOrderSummary().length).toBe(1);
  });

  it('should increase the counter of a product', () => {
    service.addOrder(order);
    service.increaseProduct(0);
    expect(service.getOrderSummary()[0].count).toBe(6);
  })

  it('should decrease the counter of a product', () => {
    service.addOrder(order);
    service.decreaseProduct(0);
    expect(service.getOrderSummary()[0].count).toBe(4);
  })

  it('should delet an order', () => {
    service.addOrder(order);
    service.deleteOneOrder(0);
    expect(service.getOrderSummary().length).toBe(0);
  })

  it('should clear the array of products', () => {
    service.addOrder(order);
    service.clearOrderSummary();
    expect(service.getOrderSummary().length).toBe(0);
  })
});
