import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product = {name:'', url:'', price:0, type:'', count: 0, queso:0, huevo:0};
  @Input() pedidos: any[]=[];


  ngOnInit(): void {
  }

}
