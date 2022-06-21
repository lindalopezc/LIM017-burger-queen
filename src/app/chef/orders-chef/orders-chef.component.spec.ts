import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersChefComponent } from './orders-chef.component';

describe('OrdersChefComponent', () => {
  let component: OrdersChefComponent;
  let fixture: ComponentFixture<OrdersChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersChefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
