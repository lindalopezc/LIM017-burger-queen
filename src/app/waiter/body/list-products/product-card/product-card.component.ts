import { Component, OnInit, Input } from '@angular/core';
import Product  from 'src/app/interfaces/product';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product!: Product;

    constructor(private orderService: OrderService){}

  ngOnInit(): void {
  }

  addOrder(product: Product){
    const order = {...product, count: 1}
    this.orderService.addOrder(order);
  }

  addEgg(event: any){
    this.product.egg = event.target.value;
  }

  addCheese(event: any){
    this.product.cheese = event.target.value;
  }
  clearSelect(){

  }
}
