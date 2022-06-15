import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { OrderService } from 'src/app/services/orden.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product = {name:'', url:'', price:0, type:'', count: 0, cheese:0, egg:0};

  get orderSummary(){
    return this.orderService.orderSummary;
  }

  constructor(public orderService: OrderService){}

  ngOnInit(): void {
  }

  addOrder(order: Product){
    this.orderService.addOrder(order);
  }

  addEgg(event: any){
    this.product.egg = event.target.value;
  }

  addCheese(event: any){
    this.product.cheese = event.target.value;
  }
}
