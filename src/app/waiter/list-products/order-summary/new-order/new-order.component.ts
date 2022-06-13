import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { OrderService } from 'src/app/services/orden.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss'],
  providers:[OrderService]
})
export class NewOrderComponent implements OnInit {
  @Input() order: Product = {name:'', url:'', price:0, type:'', count:0 , cheese:0, egg:0};

  constructor(public orderService: OrderService){}

  increaseProduct(event: Event, product:Product){
    product.count++;
  }
  // decreaseProduct(event: Event, product:Product){
  //   product.count--;
  //   if(product.count===0){
  //     this.orderService.orderSummary.slice([indexOf(product)],1)
  //   }
  // }
  ngOnInit(): void {
  }

}

