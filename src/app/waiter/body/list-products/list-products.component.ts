import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  @Input() products: any;
  @Input() type: string = '';

  pedidos=[];


  constructor() { }

  ngOnInit(): void {
  }
typeOfProduct(value: string){
  this.type = value;
  console.log(this.products)
}
}
