import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import  Product from 'src/app/interfaces/product';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss'],
})
export class NewOrderComponent implements OnInit {
  @Input() order !: Order;
  @Input() index !:number;
  items!: any;
  @Output() pricePerProduct = new EventEmitter<number>();

  constructor(private orderService: OrderService){
  }

  totalPerProduct(){
    return this.order.price*this.order.count+Number(this.order.egg)*this.order.count + Number(this.order.cheese)*this.order.count;
  }


  increaseProduct(index: number){
    this.pricePerProduct.emit(this.order.price);
    return this.orderService.increaseProduct(index);
  }
  decreaseProduct(index: number){
    this.pricePerProduct.emit(-this.order.price);
    return this.orderService.decreaseProduct(index);
  }
  deleteOrder(index: number){
    this.orderService.deleteOneOrder(index);
  }

  ngOnInit(): void {
    this.items = this.orderService.getOrderSummary();
  }

}
