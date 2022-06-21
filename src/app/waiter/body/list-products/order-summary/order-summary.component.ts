import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Order } from 'src/app/interfaces/order';
import { FirebaseService, OrderService } from 'src/app/services/orden.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent implements OnInit {

  nameWaiter = 'Juan';
  table = new FormControl('',[]);
  nameClient = new FormControl('',[]);
  title = 'LIM017-burger-queen';
  date = Date().substring(0,34);
  total = 0;
  orderSummary !: Order[];

  constructor(
    private orderService: OrderService,
    private firebaseService: FirebaseService){
    this.orderSummary = this.orderService.getOrderSummary();
  }

  ngOnInit(): void {

  }

  addPriceToTotal(price: number){
    this.total+=price
  }
  totalPrice(){
    return this.orderSummary.reduce((previus, current)=>{
      if(current.cheese&&current.egg)
        return current.price+previus+Number(current.egg)+Number(current.cheese);
      return current.price+previus;
    },this.total)
  }
  createOrder(event: Event, orders : Order[]){
    const order = {
      Waiter: this.nameWaiter,
      Client: this.nameClient.value,
      Table: this.table.value,
      Date: this.date,
      Burguers: orders,
      Accompaniments:['fries potatoes', 'onion rings'], //esto se debe corregir cuando se adicione la vista de acompañamientos
      Beverages: ['soda', 'water'],
      Total:this.totalPrice()
    };
    this.firebaseService.addOrderToFirebase(order); //cambie addOrden por addOrderToFirebase
    this.orderService.clearOrderSummary();
  }
}
