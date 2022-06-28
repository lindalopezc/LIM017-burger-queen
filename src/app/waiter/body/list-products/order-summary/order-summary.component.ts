import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Order } from 'src/app/interfaces/order';
import { FirebaseService } from 'src/app/services/firebase.service';
import { OrderService } from 'src/app/services/order.service';

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
    private firebaseService: FirebaseService){
    this.orderSummary = this.orderService.getOrderSummary();
  }

  addPriceToTotal(price: number){
    this.total += price
  }

  totalPrice(){
    return this.orderSummary.reduce((previus, current)=>{
      let total = 0;
      if(current.egg){
        return current.price + previus + Number(current.egg) + Number(current.cheese);
      }
      else
        return current.price + previus;
    },this.total)
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
    this.firebaseService.addOrderToFirebase(order);
    this.orderService.clearOrderSummary();
  }

  ngOnInit(): void {}
}
