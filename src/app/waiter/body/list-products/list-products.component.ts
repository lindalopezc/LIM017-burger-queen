import { Component, OnInit } from '@angular/core';
import { products } from './products';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  products2 = products;
  type='burguers';
  pedidos=[];


  constructor() { }

  ngOnInit(): void {
  }
typeOfProduct(value: string){
  this.type = value;
  console.log(products[value])
}
}
