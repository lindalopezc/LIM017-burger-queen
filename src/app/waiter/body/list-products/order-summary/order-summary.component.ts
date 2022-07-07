import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Order } from 'src/app/interfaces/order';
import { UserFirebaseService } from 'src/app/services/user-firebase.service';
import { OrderService } from 'src/app/services/order.service';
import { OrdersFirebaseService } from 'src/app/services/orders-firebase.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
})
export class OrderSummaryComponent implements OnInit {

  nameWaiter = 'Juan';
  table = new FormControl('',[]);
  nameClient = new FormControl('',[]);
  title: string = 'LIM017-burger-queen';
  date: number= Date.now();
  total: number = 0;
  orderSummary !: Order[];
  index: number = 0;

  constructor(
    private orderService: OrderService,
    private ordersFirebase: OrdersFirebaseService){
    this.orderSummary = this.orderService.getOrderSummary();
  }

  addPriceToTotal(price: number){
    this.total += price
  }

  totalPrice(){
    if(this.total>=0 && this.orderSummary.length>0)
      return this.orderSummary.reduce((previus, current)=>{
        if(current.egg || current.cheese)
          return current.price + previus + Number(current.egg)*current.count + Number(current.cheese)*current.count;
        else
        return current.price + previus;
      },this.total)
    return this.total = 0;
  }

  createOrder(event: Event, orders : Order[]){
    this.index++;
    const order = {
      Waiter: this.nameWaiter,
      Client: this.nameClient.value,
      Table: this.table.value,
      Date: this.date,
      Products: orders,
      Status: 'Pending',
      Total:this.totalPrice(),
      Timer: 0,
    };
    this.ordersFirebase.addOrderToFirebase(order);
    this.orderService.clearOrderSummary();
  }

  ngOnInit(): void {}
}
