import { Component, OnInit, Input } from '@angular/core';
import  Product from 'src/app/interfaces/product';
import { OrderService } from 'src/app/services/orden.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss'],
})
export class NewOrderComponent implements OnInit {
  @Input() order !: Product;
  @Input() index !:number;

  constructor(private orderService: OrderService){}

  increaseProduct(event: Event, index: number){
    return this.orderService.increaseProduct(index);
  }

  ngOnInit(): void {
  }

}
